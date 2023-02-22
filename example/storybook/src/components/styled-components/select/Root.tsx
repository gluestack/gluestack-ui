import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'flex': 1,
    'w': '100%',
    'h': '100%',
    'minWidth': '50%',
    'maxWidth': 500,
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'px': '$3',
    'py': '$2',

    ':hover': {
      bg: '$transparent',
      borderColor: '$primary700',
    },
    ':invalid': {
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$error600',
    },

    'variants': {
      variant: {
        underlined: {
          px: '$0',
          borderWidth: 0,
          borderRadius: 0,
          borderBottomWidth: '$1',
          _itemList: {
            bg: 'transparent',
          },
          _light: {},
        },

        outline: {
          bg: 'transparent',
          _input: {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
        },

        rounded: {
          px: '$4',
          bg: 'transparent',
          borderRadius: 999,

          _dark: {
            ':hover': {
              borderColor: '$primary400',
            },

            ':focus': {
              borderColor: '$primary400',
            },

            ':focusVisible': {
              boxShadow: 'offset 0 0 0 2px $primary400',
            },
            ':invalid': {
              borderColor: '$error400',
            },
          },
        },
      },

      size: {
        xl: {
          _itemList: {
            fontSize: '$xl',
            lineHeight: '$xl',
          },
        },

        lg: {
          _itemList: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
        },

        md: {
          _itemList: {
            fontSize: '$md',
            lineHeight: '$lg',
          },
        },

        sm: {
          _itemList: {
            fontSize: '$sm',
            lineHeight: '$md',
          },
        },
      },
    },

    '_dark': {
      ':hover': {
        borderColor: '$primary400',
      },
      ':focus': {
        borderColor: '$primary400',
      },

      ':focusVisible': {
        boxShadow: 'offset 0 0 0 2px $primary400',
      },
      ':invalid': {
        borderColor: '$error400',
      },
    },

    ':focus': {
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$primary700',
    },

    ':focusVisible': {
      boxShadow: 'offset 0 0 0 2px $primary700',
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    descendantStyle: ['_itemList'],
  }
);
