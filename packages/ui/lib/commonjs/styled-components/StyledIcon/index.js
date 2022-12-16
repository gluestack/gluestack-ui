'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _uiStyled = require('@gluestack/ui-styled');
var _reactNativeSvg = require('react-native-svg');
var _default = (0, _uiStyled.styled)(
  _reactNativeSvg.Svg,
  {
    baseStyle: {
      style: {
        w: 20,
        h: 20,
      },
    },
    variants: {
      modalHeader: {
        style: {
          color: '$muted.500',
          h: 16,
          w: 16,
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=index.js.map
