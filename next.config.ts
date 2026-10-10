import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/venera-store",
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
