/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: 'export', */
  webpack: (config) => {
    config.externals.push(
      'pino-pretty',
      'lokijs',
      'utf-8-validate',
      'bufferutil'
    );
    return config;
  },
  eslint: {
    dirs: ['components', 'hooks', 'lib', 'app'],
  },
  distDir: 'out',
};

module.exports = nextConfig;
