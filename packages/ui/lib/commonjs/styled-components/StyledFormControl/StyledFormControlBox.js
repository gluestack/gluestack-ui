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
        w: 300,
        bg: '$amber.500',
        flexDirection: 'column',
        p: 8,
      },
      state: {
        disabled: {
          style: {
            borderColor: '$primary.800',
            borderWidth: 2,
          },
        },
        invalid: {
          style: {
            borderColor: '$red.500',
            borderWidth: 2,
          },
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=StyledFormControlBox.js.map
