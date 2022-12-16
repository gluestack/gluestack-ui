'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _uiStyled = require('@gluestack/ui-styled');
var _reactNative = require('react-native');
var _default = (0, _uiStyled.styled)(
  _reactNative.TextInput,
  {
    baseStyle: {
      style: {
        px: '$4',
        py: '$3',
        // borderRadius: 4,
      },
    },

    variants: {
      outlined: {
        style: {
          //   borderColor: "$red.500",
          //   borderWidth: 2,
        },
      },
      ghost: {
        style: {
          //   bg: "$red.500",
        },
      },
    },
    sizes: {
      '2xl': {
        style: {
          fontSize: 22,
        },
      },
      'xl': {
        style: {
          fontSize: 20,
        },
      },
      'lg': {
        style: {
          fontSize: 18,
        },
      },
      'md': {
        style: {
          fontSize: 16,
        },
      },
      'sm': {
        style: {
          fontSize: 14,
        },
      },
      'xs': {
        style: {
          fontSize: 12,
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=index.js.map
