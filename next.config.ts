import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //@ts-ignore
  experimental: {serverActions: true},
};

export default nextConfig;
