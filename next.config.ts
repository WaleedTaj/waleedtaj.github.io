import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (https://waleedtaj.github.io/).
  // Served from the domain root as a user site, so no basePath is needed.
  output: "export",
  trailingSlash: true,
  images: {
    // The default image optimizer needs a server; serve images as-is.
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
