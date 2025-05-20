import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.jsを使用しない。
module.exports = {
  experimental: {
    turbo: false,
  },
};
