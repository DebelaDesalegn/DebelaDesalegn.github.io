import type { NextConfig } from "next";

// Set STATIC_EXPORT=true to produce a fully static site in ./out
// (for GitHub Pages, Netlify drop, any static host). Vercel needs neither.
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export", trailingSlash: true, images: { unoptimized: true } } : {}),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
