/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  image: {
    domains: ['sba.net.vn', 'theme.hstatic.net'],
  },
  webpack: config => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
};

module.exports = nextConfig;
