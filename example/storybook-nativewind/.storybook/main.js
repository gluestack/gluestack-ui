const path = require('path');
// console.log(path.resolve('../../', 'node_modules/@gluestack-style/react'));
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/overview/**/*.stories.mdx',
    // '../src/overview/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/getting-started/**/*.stories.mdx',
    // '../src/getting-started/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-docs',
    '@geometricpanda/storybook-addon-iframe',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
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
      test: /\.(js|ts|tsx)$/,
      // include: [path.resolve('../../', 'node_modules/@gluestack-style/react')],
      use: 'babel-loader',
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@custom-ui/themed': path.join(__dirname, '../../../packages/themed/src'),
      '@custom-ui/config': path.join(
        __dirname,
        '../../../packages/config/src/gluestack-ui.config'
      ),
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      '@custom-ui/config': path.join(
        __dirname,
        '../../../packages/config/src/gluestack-ui.config'
      ),
    };
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // Return the altered config
    return config;
  },
};
