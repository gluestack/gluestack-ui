import { PluginItem } from '@babel/core'; // eslint-disable-line import/no-extraneous-dependencies
import { Configuration } from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import { logger } from '@storybook/node-logger';
import path from 'path';

interface BabelOptions {
  extends: string | null;
  plugins: PluginItem[] | null;
  presets: PluginItem[] | null;
}

const plugins = [require.resolve('@babel/plugin-transform-classes')];

export const babel = (config: BabelOptions): BabelOptions => {
  const { presets = [] } = config;
  return {
    ...config,
    presets: [...(presets as PluginItem[])],
    plugins,
  };
};

export const managerBabel = (config: BabelOptions): BabelOptions => {
  const { presets = [] } = config;
  return {
    ...config,
    presets: [...(presets as PluginItem[])],
  };
};

const include =
  /[\\/]node_modules[\\/](@storybook\/node-logger|are-you-es5|better-opn|boxen|chalk|commander|find-cache-dir|find-up|fs-extra|json5|node-fetch|pkg-dir|resolve-from|semver)/;
const es6Loader = {
  test: /\.js$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        sourceType: 'unambiguous',
        presets: [],
        plugins,
      },
    },
  ],
  include,
};

export const managerWebpack = (
  webpackConfig: Configuration = {}
): Configuration => ({
  ...webpackConfig,
  module: {
    ...webpackConfig.module,
    rules: [...(webpackConfig.module?.rules ?? [])],
  },
});

export const webpack = async (webpackConfig: Configuration = {}) => {
  logger.info(`=> Using Gluestack preset`);
  if (webpackConfig.resolve) {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      'react-native': path.dirname(require.resolve('react-native-web')),
    };

    webpackConfig.resolve.extensions = [
      '.web.jsx',
      '.web.js',
      '.web.tsx',
      '.web.ts',
      ...(webpackConfig?.resolve?.extensions ?? []),
    ];
  }
  return webpackConfig;
};
