const basePath = process.env.NODE_ENV === 'production' ? '/70th' : process.env.NODE_ENV === 'staging' ? '/staging' : '';
console.log("NODE_ENV: " + process.env.NODE_ENV);

module.exports = {
  basePath,
  env: { basePath },
  experimental: {
    scrollRestoration: true
  }
};

