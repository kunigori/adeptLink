import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EZ-Asset | IT資産管理・DX推進支援",
  description:
    "EZ-Assetは、中小企業のDX推進支援とIT資産の適正処分・再資源化を通じて、企業の「もったいない」を次の成長につなげます。",
  openGraph: {
    title: "EZ-Asset | IT資産管理・DX推進支援",
    description:
      "中小企業のDX推進支援とIT資産の適正処分・再資源化を支援します。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
