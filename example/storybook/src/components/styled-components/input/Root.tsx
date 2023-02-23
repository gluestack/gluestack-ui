import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'minWidth': '50%',
    'maxWidth': 500,

    'px': '$3',
    'py': '$2',
    ':hover': {
      ':invalid': {},
      'bg': '$transparent',
      'borderColor': '$primary700',
    },
    ':invalid': {
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$error600',
    },
    ':focus': {
      // bg: '$primary50',
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$primary700',
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

      variant: {
        underlined: {
          '_input': {
            px: '0',
            // outlineWidth: '0',
            // outline: 'none',
            // cursor: 'auto',
          },
          'bg': 'transparent',
          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',
          ':hover': {
            borderBottomWidth: '$1',
            borderBottomColor: '$primary700',
          },
          ':focus': {
            // ':hover': {
            //   borderBottomWidth: '$1',
            //   borderBottomColor: '$primary700',
            // },
            borderWidth: 0,
            borderBottomWidth: '$2',
            borderColor: '$primary700',
          },
          ':active': {
            borderWidth: 0,
            bg: 'transparent',
            borderBottomWidth: '$2',
            borderColor: '$primary700',
          },
          ':invalid': {
            ':focus': {
              ':hover': {
                borderBottomColor: '$primary700',
              },
            },
            ':hover': {
              borderBottomWidth: '$2',
              borderBottomColor: '$error600',
            },
            'borderBottomWidth': '$2',
          },
        },
        outline: {
          'bg': 'transparent',
          '_input': {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
          ':invalid': {
            ':focus': {
              ':hover': {
                borderColor: '$primary700',
              },
            },
            ':hover': {
              borderWidth: '$2',
              borderColor: '$error600',
            },
            'borderWidth': '$2',
            // 'borderBottomWidth': '$2',
          },
        },
        rounded: {
          px: '$4',
          bg: 'transparent',
          borderRadius: 999,
          _input: {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
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
      'borderColor': 'borderDark700',
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

    // ':focusVisible': {
    //   boxShadow: 'offset 0 0 0 2px $primary700',
    // },
    'alignContent': 'center',
    'placeholderTextColor': '$textLight400',
    ':disabled': {
      opacity: 0.4,
    },
    'defaultProps': {
      size: 'md',
    },
  },

  { descendantStyle: ['_input'], DEBUG: 'INPUT' }
);
