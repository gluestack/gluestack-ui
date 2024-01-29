const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
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
            '@gluestack-ui/popover': path.join(
              __dirname,
              '../../packages/unstyled/popover/src'
            ),
            '@gluestack-ui/actionsheet': path.join(
              __dirname,
              '../../packages/unstyled/actionsheet/src'
            ),
            '@gluestack-ui/select': path.join(
              __dirname,
              '../../packages/unstyled/select/src'
            ),
            '@gluestack-ui/alert': path.join(
              __dirname,
              '../../packages/unstyled/alert/src'
            ),
            '@gluestack-ui/alert-dialog': path.join(
              __dirname,
              '../../packages/unstyled/alert-dialog/src'
            ),
            '@gluestack-ui/avatar': path.join(
              __dirname,
              '../../packages/unstyled/avatar/src'
            ),
            '@gluestack-ui/button': path.join(
              __dirname,
              '../../packages/unstyled/button/src'
            ),
            '@gluestack-ui/checkbox': path.join(
              __dirname,
              '../../packages/unstyled/checkbox/src'
            ),
            '@gluestack-ui/divider': path.join(
              __dirname,
              '../../packages/unstyled/divider/src'
            ),
            '@gluestack-ui/fab': path.join(
              __dirname,
              '../../packages/unstyled/fab/src'
            ),
            '@gluestack-ui/form-control': path.join(
              __dirname,
              '../../packages/unstyled/form-control/src'
            ),
            '@gluestack-ui/hstack': path.join(
              __dirname,
              '../../packages/unstyled/hstack/src'
            ),
            '@gluestack-ui/icon': path.join(
              __dirname,
              '../../packages/unstyled/icon/src'
            ),
            '@gluestack-ui/input': path.join(
              __dirname,
              '../../packages/unstyled/input/src'
            ),
            '@gluestack-ui/linear-gradient': path.join(
              __dirname,
              '../../packages/unstyled/linear-gradient/src'
            ),
            '@gluestack-ui/link': path.join(
              __dirname,
              '../../packages/unstyled/link/src'
            ),
            '@gluestack-ui/menu': path.join(
              __dirname,
              '../../packages/unstyled/menu/src'
            ),
            '@gluestack-ui/modal': path.join(
              __dirname,
              '../../packages/unstyled/modal/src'
            ),
            '@gluestack-ui/overlay': path.join(
              __dirname,
              '../../packages/unstyled/overlay/src'
            ),
            '@gluestack-ui/pressable': path.join(
              __dirname,
              '../../packages/unstyled/pressable/src'
            ),
            '@gluestack-ui/progress': path.join(
              __dirname,
              '../../packages/unstyled/progress/src'
            ),
            '@gluestack-ui/provider': path.join(
              __dirname,
              '../../packages/unstyled/provider/src'
            ),
            '@gluestack-ui/radio': path.join(
              __dirname,
              '../../packages/unstyled/radio/src'
            ),
            '@gluestack-ui/select': path.join(
              __dirname,
              '../../packages/unstyled/select/src'
            ),
            '@gluestack-ui/slider': path.join(
              __dirname,
              '../../packages/unstyled/slider/src'
            ),
            '@gluestack-ui/spinner': path.join(
              __dirname,
              '../../packages/unstyled/spinner/src'
            ),
            '@gluestack-ui/switch': path.join(
              __dirname,
              '../../packages/unstyled/switch/src'
            ),
            '@gluestack-ui/tabs': path.join(
              __dirname,
              '../../packages/unstyled/tabs/src'
            ),
            '@gluestack-ui/textarea': path.join(
              __dirname,
              '../../packages/unstyled/textarea/src'
            ),
            '@gluestack-ui/toast': path.join(
              __dirname,
              '../../packages/unstyled/toast/src'
            ),
            '@gluestack-ui/tooltip': path.join(
              __dirname,
              '../../packages/unstyled/tooltip/src'
            ),
            '@gluestack-ui/transitions': path.join(
              __dirname,
              '../../packages/unstyled/transitions/src'
            ),
            '@gluestack-ui/utils': path.join(
              __dirname,
              '../../packages/unstyled/utils/src'
            ),
            '@gluestack-ui/vstack': path.join(
              __dirname,
              '../../packages/unstyled/vstack/src'
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
      ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
