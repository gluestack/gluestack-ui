import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    'borderWidth': 1,
    'borderColor': '$borderLight300',
    'borderRadius': 4,

    '_dark': {
      borderColor: '$borderDark700',
    },

    '_input': {
      _dark: {
        color: '$lightText',
      },
    },

    'variants': {
      variant: {
        rounded: {
          borderRadius: 999,

          _input: {
            borderRadius: 999,
          },
        },

        filled: {
          borderWidth: 1,
          bg: '$muted100',
          borderColor: '$muted100',

          _dark: {
            bg: '$muted800',
            borderColor: '$muted800',
          },
        },

        underlined: {
          'borderWidth': 0,
          'borderRadius': 0,
          'pl': 0,
          'borderBottomWidth': 1,

          '_input': {
            outlineWidth: 0,
          },

          ':focus': {
            borderColor: '$primary600',
            _web: {
              boxShadow: '0 1px 0 0 #005DB4',
            },
          },
        },

        unstyled: {
          'borderWidth': 0,

          '_input': {
            outlineWidth: 0,
          },

          ':focus': {
            _web: {
              boxShadow: '0 0 0 0',
            },
          },
        },
      },

      size: {
        '2xl': {
          _input: {
            fontSize: 22,
          },
        },

        'xl': {
          _input: {
            fontSize: 20,
          },
        },

        'lg': {
          _input: {
            fontSize: 18,
          },
        },

        'md': {
          _input: {
            fontSize: 16,
          },
        },

        'sm': {
          _input: {
            fontSize: 14,
          },
        },

        'xs': {
          _input: {
            fontSize: 12,
          },
        },
      },
    },

    '_web': {
      _input: {
        outlineWidth: '0',
        outline: 'none',
        cursor: 'auto',
      },
    },

    ':hover': {
      borderColor: '$primary600',
    },

    ':focus': {
      borderColor: '$primary600',
      bg: 'transparent',
      _web: {
        boxShadow: '0 0 0 1px #005DB4',
      },
      _input: {},
    },

    ':disabled': {
      'bg': '$muted100',

      ':hover': {
        borderColor: '$muted300',
      },
    },

    ':invalid': {
      'borderColor': '$error600',

      ':focus': {
        _input: {
          outlineColor: '$error600',
        },
      },
    },
  },
  { descendantStyle: ['_input'] }
);
