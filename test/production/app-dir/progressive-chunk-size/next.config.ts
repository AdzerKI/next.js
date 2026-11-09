import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    progressiveChunkSize: 1024 * 1024,
  },
}

export default nextConfig
