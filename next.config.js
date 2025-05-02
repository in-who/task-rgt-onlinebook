/** @type {import('next').NextConfig} */
const nextConfig = {    
  experimental: {
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ],
  },
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com'],
    domains: ['books.google.com'],
    domains: ['fonts.gstatic.com']
  },
  env: {
    Base_URL: process.env.Base_URL,
    // Other environment variables
  },
  
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}


module.exports = nextConfig
