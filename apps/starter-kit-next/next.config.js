/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };

    // More explicit resolution order - web files first
    config.resolve.extensions = [
      '.next15.js',
      '.next15.jsx',
      '.next15.ts',
      '.next15.tsx',
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.mjs',
    ];

    return config;
  },
  transpilePackages: [
    'react-native-web',
    'nativewind',
    'react-native-css-interop',
  ],
  // Updated for new Turbopack configuration
  turbopack: {
    resolveAlias: {
      'react-native': 'react-native-web',
    },
    resolveExtensions: [
      '.next15.js',
      '.next15.jsx',
      '.next15.ts',
      '.next15.tsx',
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.mjs',
    ],
  },
  experimental: {
    // Keeping this for backwards compatibility but will be deprecated
    turbo: {
      resolveAlias: {
        'react-native': 'react-native-web',
      },
    },
  },
};

module.exports = nextConfig;
