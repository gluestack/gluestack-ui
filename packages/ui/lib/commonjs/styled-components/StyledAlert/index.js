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
        alignItems: 'center',
        justifyContent: 'flex-start',
        bg: '$green.100',
        p: '$3',
        space: '$3',
        // @ts-ignore
        borderRadius: '$sm',
      },
    },
    variants: {
      'subtle': {
        style: {
          bg: '$blue.100',
          // @ts-ignore
          _icon: {
            color: '$blue.700',
          },
        },
      },
      'solid': {
        style: {
          bg: '$blue.100',
          // @ts-ignore
          descendants: {
            _icon: {
              style: {
                color: '$gray.50',
              },
            },
          },
        },
      },
      'left-accent': {
        style: {
          // @ts-ignore
          borderLeftWidth: '$4',
          bg: '$blue.100',
          descendants: {
            _icon: {
              style: {
                color: '$blue.700',
              },
            },
          },
          borderLeftColor: '$blue.700',
        },
      },
      'top-accent': {
        style: {
          // @ts-ignore
          borderTopWidth: '$4',
          bg: '$blue.100',
          descendants: {
            _icon: {
              style: {
                color: '$blue.700',
              },
            },
          },
          borderTopColor: '$blue.700',
        },
      },
      'outline': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          descendants: {
            _icon: {
              style: {
                color: '$blue.700',
              },
            },
          },
          borderColor: '$blue.700',
        },
      },
      'outline-light': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          descendants: {
            _icon: {
              style: {
                color: '$blue.700',
              },
            },
          },
          borderColor: '$blue.400',
        },
      },
    },
    defaultProps: {
      variant: 'subtle',
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
exports.default = _default;
//# sourceMappingURL=index.js.map
