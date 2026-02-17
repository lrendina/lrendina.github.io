import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/nextjs-website" : "",
  assetPrefix: isProd ? "/nextjs-website" : "",
};

export default withContentlayer(nextConfig);
