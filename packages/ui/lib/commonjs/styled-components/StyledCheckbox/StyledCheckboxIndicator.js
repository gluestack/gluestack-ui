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
        justifyContent: 'center',
        alignItems: 'center',
        h: 20,
        w: 20,
        borderColor: '$trueGray.300',
        borderWidth: 2,
        borderRadius: 6,
      },
      state: {
        checked: {
          style: {
            borderColor: '$primary.500',
          },
        },
        hover: {
          style: {
            borderColor: '$trueGray.400',
          },
          state: {
            checked: {
              style: {
                borderColor: '$primary.600',
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
//# sourceMappingURL=StyledCheckboxIndicator.js.map
