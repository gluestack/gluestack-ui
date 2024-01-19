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
            '@custom-ui/themed': path.join(
              __dirname,
              '../../packages/themed/src'
            ),
            '@custom-ui/config': path.join(
              __dirname,
              '../../packages/config/src/gluestack-ui.config'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
      'react-native-reanimated/plugin',
    ],
  };
};
