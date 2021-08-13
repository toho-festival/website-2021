const basePath = process.env.NODE_ENV === 'production' ? '/70th' : process.env.NODE_ENV === 'staging' ? '/staging' : '';

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }

    return config;
  },
  basePath,
  env: { basePath },
};

