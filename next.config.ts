import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blvzwgvnflznbohqwiut.supabase.co",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["fluent-ffmpeg", "ffprobe-static", "ffmpeg-static"],
  },
};

export default nextConfig;
