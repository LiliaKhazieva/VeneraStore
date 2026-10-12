import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/VeneraStore",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixnio.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
