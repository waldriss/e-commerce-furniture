/** @type {import('next').NextConfig} */

import million from "million/compiler";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
      { hostname: "get.ru" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default million.next(nextConfig);
