import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["alweamtransport.com", "images.unsplash.com", "cdn.sanity.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
