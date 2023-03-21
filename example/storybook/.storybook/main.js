const path = require('path');

// console.log(path.resolve('../../', 'node_modules/@dank-style/react'));
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-docs',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-typescript').default,
              [
                require('@babel/preset-react').default,
                {
                  runtime: 'automatic',
                },
              ],
              require('@babel/preset-env').default,
            ],
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    config.resolve.extensions.push('.mjs');
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      // include: [path.resolve('../../', 'node_modules/@dank-style/react')],
      use: 'babel-loader',
    });

    // Return the altered config
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
