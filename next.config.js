/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.strictExportPresence = false;
    }
    return config;
  },
};

module.exports = nextConfig
