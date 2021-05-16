const basePath = process.env.NODE_ENV === 'production' ? '/70th' : process.env.NODE_ENV === 'staging' ? '/staging' : '';

module.exports = {
  basePath,
  env: { basePath },
};

