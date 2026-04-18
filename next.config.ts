import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // When set, only matching paths are allowed for local `next/image` src (incl. query strings if `search` omitted).
    localPatterns: [{ pathname: "/**" }],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
