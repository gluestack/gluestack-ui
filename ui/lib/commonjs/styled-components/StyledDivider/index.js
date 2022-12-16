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
        bg: '$gray.300',
      },
    },
    variants: {
      vertical: {
        style: {
          width: '1px',
          height: '100%',
        },
      },
      horizontal: {
        style: {
          height: '1px',
          width: '100%',
        },
      },
    },
    defaultProps: {
      variant: 'horizontal',
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=index.js.map
