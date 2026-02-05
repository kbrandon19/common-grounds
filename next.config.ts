import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats:['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol:'https',
          hostname:'cdn.sanity.io'
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
        {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      ],
      qualities: [70, 75],
    },

};

export default nextConfig;
