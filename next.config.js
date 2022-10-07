/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_URL: process.env.APP_URL,
  },
  images: {
    domains: ["robohash.org"],
  },
};

module.exports = nextConfig;
