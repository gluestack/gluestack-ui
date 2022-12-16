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
        // shadow: 1
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        rounded: '$lg',
        overflow: 'hidden',
        bg: '$muted.50',
        width: '50%',
        maxWidth: 450,
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=StyledModalContent.js.map
