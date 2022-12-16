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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: '$2',
        py: '$1',
      },
    },
    variants: {
      solid: {
        style: {
          bg: '$blue.600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text.50',
            },
          },
          _icon: {
            style: {
              color: '$text.50',
            },
          },
        },
      },
      subtle: {
        style: {
          bg: '$blue.100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text.900',
            },
          },
          _icon: {
            style: {
              color: '$text.900',
            },
          },
        },
      },
      outline: {
        style: {
          bg: '$blue.100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text.900',
            },
          },
          _icon: {
            style: {
              color: '$text.900',
            },
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
//# sourceMappingURL=index.js.map
