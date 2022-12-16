'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _reactNative = require('react-native');
var _uiStyled = require('@gluestack/ui-styled');
var _default = (0, _uiStyled.styled)(
  _reactNative.Text,
  {
    baseStyle: {
      style: {
        color: '$blue.900',
        p: 2,
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
          },
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=StyledCheckboxLabel.js.map
