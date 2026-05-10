import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGhPages ? "/lumoxic-docs" : "",
  assetPrefix: isGhPages ? "/lumoxic-docs/" : "",
};

export default nextConfig;
