import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats:['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol:'https',
          hostname:'cdn.sanity.io'
        }
      ],
    },

};

export default nextConfig;
