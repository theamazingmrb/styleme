import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // add support for importing video files (.mp4, .webm)
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      type: 'asset/resource',
    });
    return config;
  }
};

export default nextConfig;
