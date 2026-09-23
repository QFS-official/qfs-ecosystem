import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Configuración para dominio personalizado en Vercel
  experimental: {
    // Optimización de imágenes para el logo
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    // Permitir dominios externos si en el futuro se usan imágenes remotas
    remotePatterns: [
      { protocol: "https", hostname: "explorer.qfspay.org" },
    ],
  },
};

export default nextConfig;
