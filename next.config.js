/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const hostnames = ['sba.net.vn', 'theme.hstatic.net', 'cdn.sanity.io'];

const nextConfig = {
  distDir: 'build',
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname,
    })),
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
