/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.christianpost.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'https://christianpost.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
