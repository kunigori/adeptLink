# プロジェクト概要

企業ホームページを GCP 完全無料構成で構築する。

## 技術スタック

- フロントエンド: Next.js → Firebase Hosting（CDN・SSL付き、無料）
- バックエンドAPI: Cloud Run（サーバーレスコンテナ、無料枠内）
- データベース: Firestore（NoSQL、無料枠内）
- イメージ保管: Artifact Registry（0.5GB無料）
- Terraform state: GCS bucket（5GB無料）
- MCP server: Cloud Run（kubectl/terraform ラッパー）
- CI/CD: GitHub Actions
- IaC: Terraform
- コンテナ: Docker

## GKE は使わない

コスト理由でGKEは不採用。Cloud Runで代替する。
スケール時にGKEへ移行しやすい設計を維持すること。

## ディレクトリ構成

project-root/
├── .github/workflows/
│   ├── ci.yml
│   └── deploy.yml
├── terraform/
│   ├── main.tf
│   ├── cloudrun.tf
│   ├── firestore.tf
│   ├── networking.tf
│   └── variables.tf
├── apps/
│   ├── frontend/        # Next.js
│   └── mcp-server/      # MCP実装
├── k8s/                 # 将来のGKE移行用（今は空）
└── docker-compose.yml

## 優先タスク

1. Terraform で GCP インフラを構築（Cloud Run, Firestore, Artifact Registry, GCS）
2. Next.js フロントエンドの Dockerfile 作成
3. GitHub Actions CI/CD パイプライン
4. MCP server の実装（gcloud / terraform コマンドラッパー）
5. Firebase Hosting へのデプロイ設定
