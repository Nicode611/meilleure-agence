import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Configuration pour Vercel
  output: 'standalone',
  poweredByHeader: false,
};

export default nextConfig;
