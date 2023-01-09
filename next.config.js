/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // reactStrictMode: true,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    domains: ['cdn.positus.global']
  }
};

module.exports = nextConfig;
