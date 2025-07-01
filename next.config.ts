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
};

export default nextConfig;
