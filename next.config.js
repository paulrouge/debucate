const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    config.module.exprContextCritical = false;
    return config;
  },
};

module.exports = nextConfig;
