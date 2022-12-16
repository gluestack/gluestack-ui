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
        px: 12,
        py: 8,
      },
      descendants: {
        _text: {
          style: {
            color: '$text.50',
          },
        },
      },
    },
  },
  {
    descendentStyle: ['_text'],
  }
);
exports.default = _default;
//# sourceMappingURL=StyledMenuItem.js.map
