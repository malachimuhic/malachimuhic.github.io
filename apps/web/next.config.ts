import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  ...(isProd && {
    output: 'export',
    distDir: '../../docs',
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Allow importing from packages/shared
  transpilePackages: ['@malachimuhic/shared'],
};

export default nextConfig;
