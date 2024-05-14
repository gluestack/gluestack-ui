import { resolve } from 'path';

/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    '../src/components/Accordion/*.mdx',
    '../src/components/Accordion/*.stories.@(mdx|js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',

    // {
    //   name: '@storybook/addon-docs',
    //   options: { configureJSX: true },
    // },
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@geometricpanda/storybook-addon-iframe',
    // {
    //   name: '@storybook/addon-essentials',
    //   options: { docs: true },
    // },

    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     cssLoaderOptions: {
    //       importLoaders: 1,
    //     },
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
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
  // features: {
  //   previewMdx2: true,
  // },

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

    // config.module.rules.push({
    //   test: /\.mdx$/,
    //   use: ['@mdx-js/loader'],
    // });
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
          'nativewind/babel',
        ],
        plugins: [
          '@babel/plugin-transform-react-jsx',
          '@babel/plugin-transform-modules-commonjs',
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    });

    // config.module.rules.push({
    //   test: /\.mjs$/,
    //   include: /node_modules/,
    //   type: 'javascript/auto',
    //   loader: 'babel-loader',
    //   options: {
    //     presets: ['@babel/preset-env'],
    //   },
    // });

    return config;
  },
};
