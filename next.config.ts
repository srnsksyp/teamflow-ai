import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me",
        protocol: "https",
      }, {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      }, {
        hostname: "avatar.vercel.sh",
        protocol: "https",
      }, {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
