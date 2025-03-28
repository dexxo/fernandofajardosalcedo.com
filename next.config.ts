import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
