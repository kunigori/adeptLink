import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { exec } from "child_process";
import { promisify } from "util";
import { z } from "zod";
import express from "express";

const execAsync = promisify(exec);

// ─── ツール定義 ────────────────────────────────────────────────────────────────

const ALLOWED_GCLOUD_PREFIXES = [
  "gcloud run services list",
  "gcloud run services describe",
  "gcloud firestore",
  "gcloud artifacts",
  "gcloud projects describe",
];

function isAllowedCommand(cmd: string): boolean {
  return ALLOWED_GCLOUD_PREFIXES.some((prefix) => cmd.startsWith(prefix));
}

function createServer(): Server {
  const server = new Server(
    { name: "adeptlink-mcp-server", version: "0.1.0" },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: "gcloud_run",
        description:
          "Read-only gcloud commands (list/describe services, firestore, artifacts)",
        inputSchema: {
          type: "object",
          properties: {
            command: {
              type: "string",
              description: "gcloud command to execute (read-only only)",
            },
          },
          required: ["command"],
        },
      },
      {
        name: "terraform_plan",
        description: "Run terraform plan in the terraform directory",
        inputSchema: {
          type: "object",
          properties: {
            var_file: {
              type: "string",
              description: "Path to .tfvars file (optional)",
            },
          },
        },
      },
      {
        name: "terraform_output",
        description: "Get terraform outputs",
        inputSchema: { type: "object", properties: {} },
      },
    ],
  }));

  server.setRequestHandler(CallToolRequestSchema, async (req) => {
    const { name, arguments: args } = req.params;

    if (name === "gcloud_run") {
      const { command } = z.object({ command: z.string() }).parse(args);
      if (!isAllowedCommand(command)) {
        return {
          content: [{ type: "text", text: `Error: command not allowed: ${command}` }],
          isError: true,
        };
      }
      try {
        const { stdout, stderr } = await execAsync(command, { timeout: 30000 });
        return { content: [{ type: "text", text: stdout || stderr }] };
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
      }
    }

    if (name === "terraform_plan") {
      const { var_file } = z
        .object({ var_file: z.string().optional() })
        .parse(args ?? {});
      const varFlag = var_file ? `-var-file="${var_file}"` : "";
      try {
        const { stdout, stderr } = await execAsync(
          `terraform -chdir=/app/terraform plan ${varFlag}`,
          { timeout: 120000 }
        );
        return { content: [{ type: "text", text: stdout || stderr }] };
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
      }
    }

    if (name === "terraform_output") {
      try {
        const { stdout } = await execAsync(
          "terraform -chdir=/app/terraform output -json",
          { timeout: 30000 }
        );
        return { content: [{ type: "text", text: stdout }] };
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
      }
    }

    return {
      content: [{ type: "text", text: `Unknown tool: ${name}` }],
      isError: true,
    };
  });

  return server;
}

// ─── エントリポイント：Cloud Run（HTTP）か stdio かを自動判定 ──────────────────

const PORT = process.env.PORT ? parseInt(process.env.PORT) : null;

if (PORT) {
  // Cloud Run: HTTP + SSE トランスポート
  const app = express();
  app.use(express.json());

  // SSE エンドポイント（MCP クライアントが接続）
  app.get("/sse", async (_req, res) => {
    const transport = new SSEServerTransport("/messages", res);
    const server = createServer();
    await server.connect(transport);
  });

  // メッセージ受信エンドポイント
  app.post("/messages", express.json(), async (req, res) => {
    // SSEServerTransport が内部で処理
    res.status(200).json({ ok: true });
  });

  // ヘルスチェック（Cloud Run 起動確認用）
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", transport: "http+sse" });
  });

  app.listen(PORT, () => {
    console.log(`MCP server listening on port ${PORT} (HTTP/SSE mode)`);
  });
} else {
  // ローカル開発: stdio トランスポート
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
