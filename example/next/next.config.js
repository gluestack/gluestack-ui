/** @type {import('next').NextConfig} */
// const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const path = require('path');
const withTM = require('next-transpile-modules')([
  'react-native-web',
  '@expo/html-elements',
  '@expo/vector-icons',
  'react-native',
  'react-native-web',
]);

const findWorkspaceRoot = require('find-yarn-workspace-root');
const workspaceRoot = findWorkspaceRoot(__dirname);
const node_modules = path.join(workspaceRoot, 'node_modules');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': path.resolve(node_modules, 'react-native-web'),
      'react': path.resolve(node_modules, 'react'),
      'react-dom': path.resolve(node_modules, 'react-dom'),
      'react-native-web': path.resolve(node_modules, 'react-native-web'),
      '@expo/html-elements': path.resolve(node_modules, '@expo/html-elements'),
      '@gluestack-style/react': path.resolve(
        node_modules,
        '@gluestack-style/react'
      ),
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
    });
    return config;
  },
};

module.exports = withPlugins(
  [withTM, [{ projectRoot: __dirname }]],
  nextConfig
);
