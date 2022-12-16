'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _uiStyled = require('@gluestack/ui-styled');
var _reactNative = require('react-native');
var _default = (0, _uiStyled.styled)(
  _reactNative.View,
  {
    baseStyle: {
      style: {
        bg: '$white',
        borderWidth: 2,
        borderColor: '$purple.500',
        borderRadius: 10,
        // flexDirection: 'row',
      },

      state: {
        invalid: {
          style: {
            bg: '$blue.800',
          },
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=InputRoot.js.map
