import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/venera-store",
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
