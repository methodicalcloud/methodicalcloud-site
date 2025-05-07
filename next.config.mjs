/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['v0.blob.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
    ],
  },
}

export default nextConfig
