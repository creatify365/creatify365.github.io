import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // Add this to ensure assets load correctly
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
};

export default nextConfig;
