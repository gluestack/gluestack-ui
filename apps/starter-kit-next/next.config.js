/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
    };

    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    return config;
  },
  transpilePackages: [
    "react-native-web",
    "nativewind",
    "react-native-css-interop",
  ],
  experimental: {
    turbo: {
      resolveAlias: {
        "react-native": "react-native-web",
      },
    },
  },
};

module.exports = nextConfig;
