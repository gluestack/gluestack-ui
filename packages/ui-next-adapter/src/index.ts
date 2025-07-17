import { NextConfig } from 'next';

interface UIAdapterConfig {
  reactStrictMode?: boolean;
  typescript?: {
    ignoreBuildErrors?: boolean;
  };
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
  transpilePackages?: string[];
}

interface WebpackOptions {
  isServer: boolean;
  dev: boolean;
  dir: string;
  buildId: string;
  config: any;
  defaultLoaders: any;
  totalPages: number;
  webpack: any;
}

type WebpackConfig = (config: any, options: WebpackOptions) => any;

const defaultUIConfig: UIAdapterConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: [
    'react-native-web',
    'nativewind',
    'react-native-css-interop',
    '@gluestack-ui-nightly/core', // Replace with @gluestack-ui/core
    '@gluestack-ui-nightly/utils', // Replace with @gluestack-ui/utils
  ],
};

const uiWebpackConfig: WebpackConfig = (config, { isServer }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
  };

  const uiExtensions = [
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

  config.resolve.extensions = uiExtensions;
  return config;
};

const uiTurbopackConfig = {
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
};

function mergeArrays<T>(arr1: T[] = [], arr2: T[] = []): T[] {
  const combined = [...arr1, ...arr2];
  return [...new Set(combined)];
}

function deepMergeConfig(target: any, source: any): any {
  const result = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (Array.isArray(source[key])) {
        result[key] = mergeArrays(target[key], source[key]);
      } else if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key])
      ) {
        result[key] = deepMergeConfig(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
}

export function withUIAdapter(userConfig: NextConfig = {}): NextConfig {
  const mergedConfig = deepMergeConfig(defaultUIConfig, userConfig);

  const userWebpack = userConfig.webpack;
  mergedConfig.webpack = (config: any, options: WebpackOptions) => {
    config = uiWebpackConfig(config, options);

    if (userWebpack && typeof userWebpack === 'function') {
      config = userWebpack(config, options);
    }

    return config;
  };

  mergedConfig.turbopack = deepMergeConfig(
    uiTurbopackConfig,
    userConfig.turbopack || {}
  );

  mergedConfig.experimental = {
    ...mergedConfig.experimental,
    turbo: deepMergeConfig(
      { resolveAlias: { 'react-native': 'react-native-web' } },
      userConfig.experimental?.turbo || {}
    ),
  };

  return mergedConfig;
}

export function createUIConfig(userConfig: NextConfig = {}): NextConfig {
  return withUIAdapter(userConfig);
}

export function validateUIConfig(config: NextConfig): boolean {
  const requiredPackages = [
    'react-native-web',
    'nativewind',
    'react-native-css-interop',
    '@gluestack-ui-nightly/core', // Replace with @gluestack-ui/core
    '@gluestack-ui-nightly/utils', // Replace with @gluestack-ui/utils
  ];
  const missingPackages = requiredPackages.filter(
    (pkg) => !config.transpilePackages?.includes(pkg)
  );

  if (missingPackages.length > 0) {
    console.warn(
      `[UI Adapter Warning]: Missing transpilePackages: ${missingPackages.join(', ')}`
    );
  }

  return missingPackages.length === 0;
}

export {
  defaultUIConfig,
  uiWebpackConfig,
  uiTurbopackConfig,
  type UIAdapterConfig,
  type WebpackConfig,
  type WebpackOptions,
};
