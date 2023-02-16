import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

const IconButton = styled(
  Pressable,
  {
    'bg': '$primary500',
    'borderRadius': 4,
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'px': 12,
    'py': 10,
    'color': '$white',
    'outlineWidth': 0,

    'variants': {
      variant: {
        solid: {
          'bg': '$primary600',

          '_text': {
            color: '$text50',
          },

          ':hover': {
            bg: '$primary700',
          },

          ':active': {
            bg: '$primary800',
          },
        },

        subtle: {
          'bg': '$primary100',
          'color': '$primary900',

          '_text': {
            color: '$primary900',
          },

          ':hover': {
            bg: '$primary200',
          },

          ':active': {
            bg: '$primary300',
          },
        },

        outline: {
          'bg': 'transparent',
          'borderWidth': 1,
          'borderColor': '$primary900',
          'color': '$primary900',

          '_text': {
            color: '$primary600',
          },

          ':hover': {
            bg: '$primary400',

            _text: {
              color: '$muted100',
            },
          },

          ':active': {
            bg: '$primary500',

            _text: {
              color: '$muted100',
            },
          },

          '_dark': {
            'borderColor': '$primary500',
            'color': '$primary500',

            '_text': {
              color: '$primary500',
            },

            ':hover': {
              bg: '$primary400',

              _text: {
                color: '$muted900',
              },
            },

            ':active': {
              bg: '$primary300',

              _text: {
                color: '$muted100',
              },
            },
          },
        },

        ghost: {
          'bg': 'transparent',
          'color': '$primary900',

          '_text': {
            color: '$primary600',
          },

          '_dark': {
            _text: {
              color: '$primary500',
            },
          },

          ':hover': {
            bg: '$primary100',

            _text: {
              color: '$text100',
            },
          },

          ':active': {
            bg: '$primary200',

            _text: {
              color: '$text50',
            },
          },
        },
      },

      size: {
        xs: {
          px: '$3',
          py: '$2',

          _text: {
            fontSize: 10,
          },
        },

        sm: {
          px: '$3',
          py: '$2',

          _text: {
            fontSize: 12,
          },
        },

        md: {
          px: '$3',
          py: '$2.5',

          _text: {
            fontSize: 14,
          },
        },

        lg: {
          px: '$3',
          py: '$3',

          _text: {
            fontSize: 16,
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'solid',
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: 0,
        boxShadow: '0px 0px 0px 2px $primary500',
      },
    },

    ':hover': {
      bg: '$primary700',
    },

    ':disabled': {
      opacity: '0.4',
    },

    ':active': {
      bg: '$primary900',
    },

    '_dark': {
      _web: {
        ':focusVisible': {
          outlineWidth: 0,
          boxShadow: `$primary500 0px 0px 0px 2px`,
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

export { default as Text } from './Text';
export { default as Spinner } from './Spinner';
export { IconButton as Root };
export default IconButton;
