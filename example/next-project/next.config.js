/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@expo/html-elements'],
};

module.exports = withGluestackUI(nextConfig);
