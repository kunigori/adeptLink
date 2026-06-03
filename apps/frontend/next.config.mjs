/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 静的エクスポート時は画像最適化を無効化（Firebase Hosting では未サポート）
  images: { unoptimized: true },
};

export default nextConfig;
