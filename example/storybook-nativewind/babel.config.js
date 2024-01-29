const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // '@components': path.resolve(
            //   __dirname,
            //   './src/nativewind-components'
            // ),
            '@components': path.resolve(__dirname, './src/components/themed'),
            '@gluestack-ui/checkbox': path.resolve(
              __dirname,
              '../../packages/unstyled/checkbox/src'
            ),
            '@gluestack-ui/button': path.resolve(
              __dirname,
              '../../packages/unstyled/button/src'
            ),
            '@gluestack-ui/nativewind-utils': path.resolve(
              __dirname,
              '../../packages/nativewind/utils/src'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
      'react-native-reanimated/plugin',
    ],
  };
};
