const path = require('path');
module.exports = {
  stories: [
    '../src/overview/**/*.stories.mdx',
    '../src/overview/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/getting-started/**/*.stories.mdx',
    '../src/getting-started/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/api/**/*.stories.mdx',
    '../src/api/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/configuration/**/*.stories.mdx',
    '../src/configuration/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/advanced/**/*.stories.mdx',
    '../src/advanced/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/plugins/**/*.stories.mdx',
    '../src/plugins/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/components/**/*.stories.mdx',
    // '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/recipes/**/*.stories.mdx',
    // '../src/recipes/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/hooks/*.stories.mdx',
    // '../src/hooks/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'none',
  },
  staticDirs: ['../public'],
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
      include: [
        // path.resolve('../../', 'node_modules/@universa11y'),
        path.resolve('../../', 'node_modules/@gluestack-ui'),
        path.resolve('../../', 'node_modules/@gluestack/design-system'),
        path.resolve('./', 'node_modules/@gluestack-style/react'),
        // path.resolve('./', 'node_modules/@gluestack-ui'),
      ],
      use: 'babel-loader',
    });

    // Return the altered config
    return config;
  },
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../'),
  //   // });

  //   config.module.rules.push({
  //     test: /\.(js|ts|tsx)$/,
  //     include: [
  //       path.resolve('../', 'node_modules/@gluestack-style/react'),
  //       path.resolve('../', 'node_modules/@gluestack/design-system'),
  //       path.resolve('../', 'node_modules/@universa11y/actionsheet'),
  //       path.resolve('../', 'node_modules/@universa11y/form-control'),
  //       path.resolve('../', 'node_modules/@universa11y/avatar'),
  //       path.resolve('../', 'node_modules/@universa11y/button'),
  //       path.resolve('../', 'node_modules/@universa11y/checkbox'),
  //       path.resolve('../', 'node_modules/@universa11y/divider'),
  //       path.resolve('../', 'node_modules/@universa11y/fab'),
  //       path.resolve('../', 'node_modules/@universa11y/hooks'),
  //       path.resolve('../', 'node_modules/@universa11y/hstack'),
  //       path.resolve('../', 'node_modules/@universa11y/icon'),
  //       path.resolve('../', 'node_modules/@universa11y/input'),
  //       path.resolve('../', 'node_modules/@universa11y/link'),
  //       path.resolve('../', 'node_modules/@universa11y/menu'),
  //       path.resolve('../', 'node_modules/@universa11y/modal'),
  //       path.resolve('../', 'node_modules/@universa11y/overlay'),
  //       path.resolve('../', 'node_modules/@universa11y/popover'),
  //       path.resolve('../', 'node_modules/@universa11y/popper'),
  //       path.resolve('../', 'node_modules/@universa11y/progress'),
  //       path.resolve('../', 'node_modules/@universa11y/provider'),
  //       path.resolve('../', 'node_modules/@universa11y/radio'),
  //       path.resolve('../', 'node_modules/@universa11y/select'),
  //       path.resolve('../', 'node_modules/@universa11y/slider'),
  //       path.resolve('../', 'node_modules/@universa11y/spinner'),
  //       path.resolve('../', 'node_modules/@universa11y/stack'),
  //       path.resolve('../', 'node_modules/@universa11y/switch'),
  //       path.resolve('../', 'node_modules/@universa11y/textarea'),
  //       path.resolve('../', 'node_modules/@universa11y/toast'),
  //       path.resolve('../', 'node_modules/@universa11y/tooltip'),
  //       path.resolve('../', 'node_modules/@universa11y/ui-provider'),
  //       path.resolve('../', 'node_modules/@universa11y/vstack'),
  //       path.resolve('../', 'node_modules/@universa11y/transitions'),
  //       path.resolve('../', 'node_modules/@universa11y/utils'),
  //       path.resolve('../', 'node_modules/@universa11y/tabs'),
  //       path.resolve('../', 'node_modules/@universa11y/react-native-aria'),
  //       path.resolve('../', 'node_modules/@universa11y/alert-dialog'),
  //       path.resolve('../', 'node_modules/@universa11y/pressable'),
  //     ],
  //     use: 'babel-loader',
  //   });

  //   // Return the altered config
  //   return config;
  // },
};

// const path = require('path');

// module.exports = {
//   stories: [
//     '../components/**/*.stories.mdx',
//     '../components/**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//   addons: [
//     'storybook-dark-mode',
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-react-native-web',
//     '@storybook/addon-docs',
//   ],
//   framework: '@storybook/react',
//   typescript: {
//     reactDocgen: 'none',
//   },
//   webpackFinal: async (config, { configType }) => {
//     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//     // You can change the configuration based on that.
//     // 'PRODUCTION' is used when building the static version of storybook.

//     // Make whatever fine-grained changes you need
//     // config.module.rules.push({
//     //   test: /\.scss$/,
//     //   use: ['style-loader', 'css-loader', 'sass-loader'],
//     //   include: path.resolve(__dirname, '../'),
//     // });

//     config.module.rules.push({
//       test: /\.(js|ts|tsx)$/,
//       include: [
//         path.resolve('../../', 'node_modules/@gluestack-style/react'),
//         path.resolve('../../', 'node_modules/@gluestack/ui'),
//         path.resolve('../../', 'node_modules/@universa11y'),
//       ],
//       use: 'babel-loader',
//     });

//     // Return the altered config
//     return config;
//   },
// };

// Message suraj
