/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Use safer source maps in development
    if (dev && !isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
}

module.exports = nextConfig
