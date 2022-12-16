'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _uiStyled = require('@gluestack/ui-styled');
var _reactNative = require('react-native');
var _default = (0, _uiStyled.styled)(
  _reactNative.Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary.500',
        borderRadius: 4,
        // '4px'
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: 12,
        py: 10,
      },
      state: {
        hover: {
          style: {
            bg: '$primary.700',
          },
        },
        active: {
          style: {
            bg: '$primary.900',
          },
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=index.js.map
