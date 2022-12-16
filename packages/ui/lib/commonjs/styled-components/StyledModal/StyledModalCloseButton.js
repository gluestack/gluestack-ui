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
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
        p: '$2',
        // @ts-ignore
        bg: 'transparent',
        rounded: '$sm',
      },
      state: {
        hover: {
          style: {
            bg: '$muted.200',
          },
        },
        active: {
          style: {
            bg: '$muted.300',
          },
        },
      },
      platform: {
        web: {
          style: {
            // @ts-ignore
            outlineWidth: 0,
            cursor: 'pointer',
          },
        },
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=StyledModalCloseButton.js.map
