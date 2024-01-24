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
            '@components': path.resolve(
              __dirname,
              './src/nativewind-components'
            ),
            '@gluestack-ui/checkbox': path.resolve(
              __dirname,
              '../../packages/unstyled/checkbox/src'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
      'react-native-reanimated/plugin',
    ],
  };
};
