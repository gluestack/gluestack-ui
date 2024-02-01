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
            '@gluestack-ui/accordion': path.resolve(
              __dirname,
              '../../packages/unstyled/accordion/src'
            ),
            '@gluestack-ui/provider': path.resolve(
              __dirname,
              '../../packages/unstyled/provider/src'
            ),
            '@gluestack-style/react': path.resolve(
              __dirname,
              '../../packages/styled/react/src'
            ),
            '@gluestack-ui/nativewind-utils': path.resolve(
              __dirname,
              '../../packages/nativewind/utils/src'
            ),
            '@gluestack-ui/config': path.resolve(
              __dirname,
              '../../packages/config/src/gluestack-ui.config.ts'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
      'react-native-reanimated/plugin',
    ],
  };
};
