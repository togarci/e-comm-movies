import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['wefit-react-web-test.s3.amazonaws.com'],
  },
};

export default nextConfig;
