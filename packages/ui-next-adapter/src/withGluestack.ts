import {
  checkIfWorkspace,
  getDependenciesFromNodeModules,
  getExactDependenciesFromNodeModules,
} from './utils';
import findWorkspaceRoot from 'find-yarn-workspace-root';

const gluestackDeps = [
  '@gluestack-ui',
  '@gluestack-ui',
  '@react-native-aria',
  '@gluestack',
  '@expo',
  '@legendapp',
  'expo-',
  'nativewind',
];

const reactNativeDeps = [
  'react-native',
  'react-native-web',
  'react-native-svg',
  'react-native-css-interop',
];

export default function withGluestackUI(nextConfig: any = {}) {
  const currDir = process.cwd();
  let rootDependencyList: string[] = [];
  let rootExactDependencyList: string[] = [];
  let parentDependencyList: string[] = [];
  let parentExactDependencyList: string[] = [];

  // Get dependencies from current directory
  try {
    rootDependencyList = getDependenciesFromNodeModules(currDir, gluestackDeps);
  } catch (e) {
    // Silently fail if node_modules scanning fails
  }

  try {
    rootExactDependencyList = getExactDependenciesFromNodeModules(
      currDir,
      reactNativeDeps
    );
  } catch (e) {
    // Silently fail if node_modules scanning fails
  }

  // Check for workspace setup
  const workspaceRoot = findWorkspaceRoot(currDir);
  const metaWorkspace = checkIfWorkspace(currDir);

  // Get dependencies from workspace root if in a workspace
  if (metaWorkspace.isWorkspace) {
    try {
      parentDependencyList = getDependenciesFromNodeModules(
        metaWorkspace.workspacePath,
        gluestackDeps
      );
      parentExactDependencyList = getExactDependenciesFromNodeModules(
        metaWorkspace.workspacePath,
        reactNativeDeps
      );
    } catch (e) {
      // Silently fail if workspace scanning fails
    }
  }

  // Get dependencies from yarn workspace root
  if (workspaceRoot) {
    try {
      const workspaceRootDeps = getDependenciesFromNodeModules(
        workspaceRoot,
        gluestackDeps
      );
      const workspaceRootExactDeps = getExactDependenciesFromNodeModules(
        workspaceRoot,
        reactNativeDeps
      );

      parentDependencyList = [...parentDependencyList, ...workspaceRootDeps];
      parentExactDependencyList = [
        ...parentExactDependencyList,
        ...workspaceRootExactDeps,
      ];
    } catch (e) {
      // Silently fail if workspace root scanning fails
    }
  }

  // Combine all dependencies and remove duplicates
  const allTranspileModules = Array.from(
    new Set([
      ...rootDependencyList,
      ...parentDependencyList,
      ...rootExactDependencyList,
      ...parentExactDependencyList,
      ...(nextConfig.transpilePackages || []),
    ])
  );

  const baseConfig = {
    ...nextConfig,
    transpilePackages: allTranspileModules,
  };

  // Turbopack configuration
  const turboConfig = {
    resolveAlias: {
      ...(nextConfig.turbopack?.resolveAlias || {}),
      'react-native': 'react-native-web',
    },
    resolveExtensions: [
      '.next15.js',
      '.next15.ts',
      '.next15.tsx',
      '.next15.jsx',
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],
    rules: {
      ...(nextConfig.turbopack?.rules || {}),
      '*.{ttf,otf,woff,woff2}': {
        loaders: ['builtin:file-loader'],
        as: '*.js',
      },
    },
  };

  return {
    ...baseConfig,
    turbopack: {
      ...nextConfig.turbopack,
      ...turboConfig,
    },
    // Keep experimental for any other experimental features
    experimental: {
      ...nextConfig.experimental,
    },
    webpack: (config: any, context: any) => {
      // Apply existing webpack config if any
      if (nextConfig.webpack) {
        config = nextConfig.webpack(config, context);
      }

      // Always apply these configurations for webpack
      // Set up React Native Web alias
      config.resolve = config.resolve || {};
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native': 'react-native-web',
      };

      // Add web-specific extensions first
      config.resolve.extensions = [
        '.next15.js',
        '.next15.ts',
        '.next15.tsx',
        '.next15.jsx',
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ];

      // Handle font files
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];

      config.module.rules.push({
        test: /\.(ttf|otf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
          },
        },
      });

      // Add fallbacks for Node.js modules that might be missing in browser
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        'react-native-safe-area-context': false,
        'fs': false,
        'path': false,
      };

      // Define environment variables for React Native compatibility
      const { DefinePlugin } = require('webpack');
      config.plugins = config.plugins || [];
      config.plugins.push(
        new DefinePlugin({
          '__DEV__': JSON.stringify(process.env['NODE_ENV'] !== 'production'),
          'process.env.REACT_NATIVE_WEB': JSON.stringify('true'),
        })
      );

      return config;
    },
  };
}
