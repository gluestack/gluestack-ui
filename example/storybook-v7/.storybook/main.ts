import { resolve } from 'path';

/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 },
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { implementation: require.resolve('postcss') },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
      include: [
        resolve(__dirname, './node_modules/react-native-css-interop'),
        resolve(__dirname, '../node_modules/react-native-css-interop'),
      ],
    });

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
          'nativewind/babel',
        ],
        plugins: ['react-native-reanimated/plugin'],
      },
    });

    return config;
  },
};
