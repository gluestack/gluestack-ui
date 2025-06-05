/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };

    // More explicit resolution order - web files first
    config.resolve.extensions = [
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
