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
        bg: '$primary.600',
        h: 16,
        w: 16,
        position: 'absolute',
        borderRadius: 9999,
        top: -6,
        marginLeft: '-1%',
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
          },
          state: {
            hover: {
              style: {
                //@ts-ignore
                outlineWidth: 4,
                outlineColor: '$primary.300',
                outlineStyle: 'solid',
              },
            },
            active: {
              style: {
                //@ts-ignore
                outlineWidth: 8,
                outlineColor: '$primary.300',
                outlineStyle: 'solid',
              },
            },
            focus: {
              style: {
                //@ts-ignore
                outlineWidth: '2px',
                outlineColor: '$primary.400',
                outlineStyle: 'solid',
              },
            },
          },
        },
      },
      descendants: {},
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=StyledSliderThumb.js.map
