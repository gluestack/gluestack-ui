'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _reactNative = require('react-native');
var _uiStyled = require('@gluestack/ui-styled');
var _default = (0, _uiStyled.styled)(
  _reactNative.View,
  {
    baseStyle: {
      style: {
        w: '100%',
        h: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bg: '$primary.500',
      },
      state: {
        checked: {
          state: {
            hover: {
              style: {
                bg: '$primary.600',
              },
            },
          },
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=StyledCheckboxIcon.js.map
