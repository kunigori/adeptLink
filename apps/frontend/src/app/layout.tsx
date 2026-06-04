import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ADEPTLINK｜企業価値向上を支援する経営コンサルティング",
  description:
    "ADEPTLINKは、流通小売業界で40年以上の経験を持つ國光良昭が代表を務めるコンサルティング事業です。経営、業務、人事、事業開発、社外取締役・顧問のご相談に対応します。",
  openGraph: {
    title: "ADEPTLINK｜企業価値向上を支援する経営コンサルティング",
    description:
      "流通小売業界で40年以上の経験を持つ實践型コンサルティング。経営・業務・人事・事業開発の課題解決を支援します。",
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
