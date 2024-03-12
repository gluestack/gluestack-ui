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
            '@/components/ui':
              process.env.STYLE_ENGINE === 'nativewind'
                ? path.resolve(__dirname, './src/core-components/nativewind')
                : path.resolve(__dirname, './src/core-components/themed'),

            'global.css':
              process.env.STYLE_ENGINE === 'nativewind'
                ? path.resolve(__dirname, './global.css')
                : path.resolve(__dirname, './global-gluestack.css'),

            '@gluestack-ui/checkbox': path.resolve(
              __dirname,
              '../../packages/unstyled/checkbox/src'
            ),
            '@gluestack-ui/tooltip': path.resolve(
              __dirname,
              '../../packages/unstyled/tooltip/src'
            ),
            '@gluestack-ui/alert-dialog': path.resolve(
              __dirname,
              '../../packages/unstyled/alert-dialog/src'
            ),
            '@gluestack-ui/slider': path.resolve(
              __dirname,
              '../../packages/unstyled/slider/src'
            ),
            '@gluestack-ui/radio': path.resolve(
              __dirname,
              '../../packages/unstyled/radio/src'
            ),
            '@gluestack-ui/button': path.resolve(
              __dirname,
              '../../packages/unstyled/button/src'
            ),
            '@gluestack-ui/link': path.resolve(
              __dirname,
              '../../packages/unstyled/link/src'
            ),
            '@gluestack-ui/accordion': path.resolve(
              __dirname,
              '../../packages/unstyled/accordion/src'
            ),
            '@gluestack-ui/provider': path.resolve(
              __dirname,
              '../../packages/unstyled/provider/src'
            ),
            '@gluestack-ui/popover': path.resolve(
              __dirname,
              '../../packages/unstyled/popover/src'
            ),
            '@gluestack-style/react': path.resolve(
              __dirname,
              '../../packages/styled/react/src'
            ),
            '@gluestack-ui/nativewind-utils/withStyleContext': path.resolve(
              __dirname,
              '../../packages/nativewind/utils/src/withStyleContext'
            ),
            '@gluestack-ui/nativewind-utils/withStyleContextAndStates':
              path.resolve(
                __dirname,
                '../../packages/nativewind/utils/src/withStyleContextAndStates'
              ),
            '@gluestack-ui/nativewind-utils/cssInterop': path.resolve(
              __dirname,
              '../../packages/nativewind/utils/src/cssInterop'
            ),
            '@gluestack-ui/nativewind-utils/tva': path.resolve(
              __dirname,
              '../../packages/nativewind/utils/src/tva'
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
