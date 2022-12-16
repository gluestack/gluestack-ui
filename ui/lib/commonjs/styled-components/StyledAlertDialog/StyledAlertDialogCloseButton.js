'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _reactNative = require('react-native');
var _uiStyled = require('@gluestack/ui-styled');
var _default = (0, _uiStyled.styled)(
  _reactNative.Pressable,
  {
    baseStyle: {
      style: {
        position: 'absolute',
        right: 3,
        top: 3,
        zIndex: 1,
        p: '$2',
        //@ts-ignore
        bg: 'transparent',
        borderRadius: 4,
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=StyledAlertDialogCloseButton.js.map
