import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'example.com',
            },
            {
              protocol: 'https',
              hostname: 'media.dodostatic.net',
            },
          ],
    },
};

export default nextConfig;
