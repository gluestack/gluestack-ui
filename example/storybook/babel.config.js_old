const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                '@gluestack-ui/themed': path.join(
                  __dirname,
                  '../../packages/themed/src'
                ),
                '@gluestack-ui/config': path.join(
                  __dirname,
                  '../../packages/config/src/gluestack-ui.config'
                ),
                '@gluestack-ui/accordion': path.join(
                  __dirname,
                  '../../packages/unstyled/accordion/src'
                ),
                '@gluestack-style/react': path.join(
                  __dirname,
                  '../../packages/styled/react/src'
                ),
                '@gluestack-style/animation-resolver': path.join(
                  __dirname,
                  '../../packages/styled/animation-resolver/src'
                ),
                '@gluestack-style/legend-motion-animation-driver': path.join(
                  __dirname,
                  '../../packages/styled/animation-legend-motion-driver/src'
                ),
                '@gluestack-style/babel-plugin-styled-resolver': path.join(
                  __dirname,
                  '../../packages/styled/babel-plugin-styled-resolver/src'
                ),
                '@react-native-aria/interactions': path.join(
                  __dirname,
                  '../../packages/react-native-aria/interactions/src'
                ),
                '@react-native-aria/accordion': path.join(
                  __dirname,
                  '../../packages/react-native-aria/accordion/src'
                ),
                '@react-native-aria/button': path.join(
                  __dirname,
                  '../../packages/react-native-aria/button/src'
                ),
                '@react-native-aria/checkbox': path.join(
                  __dirname,
                  '../../packages/react-native-aria/checkbox/src'
                ),
                '@react-native-aria/combobox': path.join(
                  __dirname,
                  '../../packages/react-native-aria/combobox/src'
                ),
                '@react-native-aria/dialog': path.join(
                  __dirname,
                  '../../packages/react-native-aria/dialog/src'
                ),
                '@react-native-aria/disclosure': path.join(
                  __dirname,
                  '../../packages/react-native-aria/disclosure/src'
                ),
                '@react-native-aria/focus': path.join(
                  __dirname,
                  '../../packages/react-native-aria/focus/src'
                ),
                '@react-native-aria/listbox': path.join(
                  __dirname,
                  '../../packages/react-native-aria/listbox/src'
                ),
                '@react-native-aria/menu': path.join(
                  __dirname,
                  '../../packages/react-native-aria/menu/src'
                ),
                '@react-native-aria/overlays': path.join(
                  __dirname,
                  '../../packages/react-native-aria/overlays/src'
                ),
                '@react-native-aria/radio': path.join(
                  __dirname,
                  '../../packages/react-native-aria/radio/src'
                ),
                '@react-native-aria/separator': path.join(
                  __dirname,
                  '../../packages/react-native-aria/separator/src'
                ),
                '@react-native-aria/slider': path.join(
                  __dirname,
                  '../../packages/react-native-aria/slider/src'
                ),
                '@react-native-aria/switch': path.join(
                  __dirname,
                  '../../packages/react-native-aria/switch/src'
                ),
                '@react-native-aria/tabs': path.join(
                  __dirname,
                  '../../packages/react-native-aria/tabs/src'
                ),
                '@react-native-aria/toggle': path.join(
                  __dirname,
                  '../../packages/react-native-aria/toggle/src'
                ),
                '@react-native-aria/tooltip': path.join(
                  __dirname,
                  '../../packages/react-native-aria/tooltip/src'
                ),
                '@react-native-aria/utils': path.join(
                  __dirname,
                  '../../packages/react-native-aria/utils/src'
                ),
              },
            },
          ]
        : [
            'babel-plugin-react-docgen-typescript',
            {
              exclude: 'node_modules',
            },
          ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
