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
            '@/components':
              process.env.STYLE_ENGINE === 'nativewind'
                ? path.resolve(__dirname, './src/components/nativewind')
                : path.resolve(__dirname, './src/components/themed'),

            'global.css':
              process.env.STYLE_ENGINE === 'nativewind'
                ? path.resolve(__dirname, './global.css')
                : path.resolve(__dirname, './global-gluestack.css'),

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