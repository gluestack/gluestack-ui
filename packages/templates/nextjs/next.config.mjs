/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Configure webpack for standard builds
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

  // Turbopack configuration for Next.js 15+
  turbo: {
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

  // Experimental configuration for backwards compatibility and future features
  experimental: {
    // For older Next.js versions that still use experimental.turbo
    turbo: {
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
  },
};

export default nextConfig;
