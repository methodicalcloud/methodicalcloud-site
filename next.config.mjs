/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for the blog
  output: 'standalone',
  
  // Ensure the blog directory is included in the build
  experimental: {
    outputFileTracingIncludes: {
      '/**': ['./content/**/*']
    }
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Add rewrites for the blog if needed
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: '/blog',
      },
      {
        source: '/blog/:slug',
        destination: '/blog/:slug',
      }
    ]
  }
}

export default nextConfig
