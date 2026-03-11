import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: '../../docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Allow importing from packages/shared
  transpilePackages: ['@malachimuhic/shared'],
};

export default nextConfig;
