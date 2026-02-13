/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.strictExportPresence = false;
    }
    return config;
  },
};

module.exports = nextConfig
