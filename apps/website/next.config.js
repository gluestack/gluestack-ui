/** @type {import('next').NextConfig} */

const { withExpo } = require("@expo/next-adapter");
const createMDX = require("@next/mdx");
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
  },
});

const nextConfig = withExpo({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    // you need to list `react-native` because `react-native-web` is aliased to `react-native`.
    "react-native",
    "react-native-web",
    "ui",
    "nativewind",
    "react-native-css-interop",
    "@expo/html-elements",
    "react-native-safe-area-context",
    // Add other packages that need transpiling
  ],
  images: {
    remotePatterns: [
      {
        hostname: "qr.expo.dev",
      },
      {
        hostname: "i.imgur.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "gluestack.github.io",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
      "react-native/Libraries/Image/AssetRegistry":
        "react-native-web/dist/cjs/modules/AssetRegistry", // Fix for loading images in web builds with Expo-Image
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
});

module.exports = withMDX(nextConfig);
