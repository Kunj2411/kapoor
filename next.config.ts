import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Unsplash images (used throughout the site)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Compress responses
  compress: true,

  // Strict mode for better React hygiene
  reactStrictMode: true,

  // Bundle analyzer friendly
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
