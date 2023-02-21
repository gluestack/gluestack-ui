import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
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
      size: {
        xl: {
          _input: {
            fontSize: '$xl',
            lineHeight: '$xl',
          },
        },

        lg: {
          _input: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
        },

        md: {
          _input: {
            fontSize: '$md',
            lineHeight: '$lg',
          },
        },

        sm: {
          _input: {
            fontSize: '$sm',
            lineHeight: '$md',
          },
        },
      },

      style: {
        underlined: {
          _input: {
            px: '$0',
          },
          bg: 'transparent',
          borderWidth: 0,
          borderRadius: 0,
          borderBottomWidth: '$1',
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
      // bg: '$primary50',
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$primary700',
    },

    ':focusVisible': {
      boxShadow: 'offset 0 0 0 2px $primary700',
    },

    'placeholderTextColor': 'textLight400',
    ':disabled': {
      opacity: 0.4,
    },
    'defaultProps': {
      size: 'md',
    },
  },

  { descendantStyle: ['_input'], DEBUG: 'INPUT' }
);
