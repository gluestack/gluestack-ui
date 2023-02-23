import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',

    'variants': {
      variant: {
        transparent: {
          bg: 'transparent',
        },
        solid: {
          bg: '$primary500',
        },
        outline: {
          bg: 'transparent',
          borderWidth: '$1',
        },
      },
      size: {
        xs: {
          p: '$1',

          _icon: {
            h: 12,
            w: 12,
          },
          _spinner: {
            h: 12,
            w: 12,
          },
        },
        sm: {
          p: '$1',
          _icon: {
            h: 16,
            w: 16,
          },
          _spinner: {
            h: 16,
            w: 16,
          },
        },
        md: {
          p: '$1',
          _icon: {
            h: 18,
            w: 18,
          },
          _spinner: {
            h: 16,
            w: 16,
          },
        },
        lg: {
          p: '$1',
          _icon: {
            h: 18,
            w: 18,
            _spinner: {
              h: 16,
              w: 16,
            },
          },
        },
      },

      // size: {
      //   md: {
      //     p: '$0.5',

      //     _spinner: {
      //       w: '$5',
      //       h: '$5',
      //     },
      //   },
      // },
    },

    'defaultProps': {
      size: 'md',
      variant: 'transparent',
    },

    ':disabled': {
      opacity: 0.5,
    },

    '_dark': {},
    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary300',
        },
      },
    },
  },
  {
    descendantStyle: ['_spinner', '_icon'],
  }
);
