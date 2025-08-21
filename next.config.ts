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
  serverExternalPackages: ["fluent-ffmpeg", "ffprobe-static", "ffmpeg-static"],
};

export default nextConfig;
