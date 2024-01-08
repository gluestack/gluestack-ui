const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@gluestack-style/nativewind': path.join(
              __dirname,
              '../../packages/styled/nativewind/src'
            ),
          },
        },
      ],
    ],
  };
};
