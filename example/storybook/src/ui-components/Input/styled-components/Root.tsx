import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'alignContent': 'center',
    'justifyContent': 'space-between',
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'minWidth': 200,
    'maxWidth': 500,
    '_input': {
      px: '$3',
      py: '$2',
    },
    'margin': 0.5,
    // 'placeholderTextColor': '$textLight400',
    ':hover': {
      ':invalid': {},
      'borderColor': '$primary700',
    },
    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$backgroundLight300',
      },
    },
    '_dark': {
      'borderColor': '$borderDark700',
      'placeholderTextColor': '$textDark600',
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
        // ':focus': {
        //   ':hover': {
        //     borderColor: '$primary400',
        //   },
        // },
        // ':hover': {
        //   borderWidth: '$2',
        //   borderColor: '$green400',
        // },
        ':focus': {},
        ':hover': {
          borderWidth: '$2',
          borderColor: '$error400',
        },
        'borderWidth': '$2',
        'borderColor': '$error400',
      },
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
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
            px: '$0',
          },
          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',
          ':hover': {
            borderBottomColor: '$primary700',
          },
          ':focus': {
            _input: {
              marginBottom: -0.5,
              paddingTop: 8,
            },
            margin: 0,
            paddingTop: 0.5,
            borderBottomWidth: '$2',
            borderColor: '$primary700',
          },
          ':invalid': {
            // ':focus': {
            //   ':hover': {
            //     borderBottomColor: '$primary700',
            //   },
            // },
            // ':hover': {
            //   margin: 0,
            //   borderBottomWidth: '$2',
            //   borderBottomColor: '$error600',
            // },
            ':hover': {
              borderBottomColor: '$error600',
            },
            ':focus': {
              _input: {
                marginBottom: -0.5,
                paddingTop: 8,
              },
              margin: 0,
              paddingTop: 0.5,
              borderBottomWidth: '$2',
              borderColor: '$error600',
            },
            'borderBottomColor': '$error600',
          },
        },
        outline: {
          '_input': {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
          ':invalid': {
            ':focus': {
              ':hover': {
                borderColor: '$primary700',
                // @ts-ignore
                boxShadow: `0 0 0 1px $primary700`,
              },
            },
            ':hover': {
              borderColor: '$error600',
            },
            'borderColor': '$error600',
            'boxShadow': `0 0 0 1px $error600`,
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
              // @ts-ignore

              boxShadow: 'offset 0 0 0 2px $primary400',
            },

            ':invalid': {
              borderColor: '$error400',
            },
          },
        },
      },
    },
    'defaultProps': {
      size: 'md',
      variant: 'outline',
    },
  },

  { descendantStyle: ['_input'] }
);
