import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'minWidth': 200,
    'flexDirection': 'row',
    'overflow': 'hidden',
    '_input': {
      px: '$3',
      py: '$2',
    },
    'alignContent': 'center',

    ':hover': {
      borderColor: '$primary700',
    },

    ':focus': {
      borderColor: '$primary700',
    },

    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$backgroundLight300',
      },
    },

    '_dark': {
      'borderColor': '$borderDark700',
      ':hover': {
        borderColor: '$primary400',
      },
      ':focus': {
        borderColor: '$primary400',
      },
      ':disabled': {
        ':hover': {
          borderColor: '$borderDark700',
        },
      },
    },

    'variants': {
      size: {
        xl: {
          _input: {
            fontSize: '$xl',
            lineHeight: '$xl',
          },
          w: 350,
        },

        lg: {
          _input: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
          w: 300,
        },

        md: {
          _input: {
            fontSize: '$md',
            lineHeight: '$lg',
          },
          w: 250,
        },

        sm: {
          _input: {
            fontSize: '$sm',
            lineHeight: '$md',
          },
          w: 200,
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
            borderColor: '$primary700',
            // @ts-ignore
            boxShadow: 'inset 0 -1px 0 0 $primary700',
          },
          ':invalid': {
            ':focus': {
              ':hover': {
                borderBottomColor: '$primary700',
              },
            },
            ':hover': {
              borderBottomColor: '$error600',
            },
            ':disabled': {
              ':hover': {
                borderBottomColor: '$error600',
              },
            },
            'borderBottomWidth': '$1',
            'borderColor': '$error600',
            // @ts-ignore
            'boxShadow': 'inset 0 -1px 0 0 $error600',
          },
          '_dark': {
            ':hover': {
              borderBottomColor: '$primary400',
            },
            ':focus': {
              borderColor: '$primary400',
              // @ts-ignore
              boxShadow: 'inset 0 -1px 0 0 $primary400',
            },
            ':invalid': {
              ':focus': {
                ':hover': {
                  borderBottomColor: '$primary400',
                },
              },
              ':hover': {
                borderBottomColor: '$error400',
              },
              ':disabled': {
                ':hover': {
                  borderBottomColor: '$error400',
                },
              },
              'borderColor': '$error400',
              // @ts-ignore
              'boxShadow': 'inset 0 -1px 0 0 $error400',
            },
          },
        },
        outline: {
          '_input': {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                // @ts-ignore
                boxShadow: 'inset 0 0 0 1px $error600',
              },
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                // @ts-ignore
                boxShadow: 'inset 0 0 0 1px $primary600',
              },
            },
            ':hover': {
              borderColor: '$error600',
            },
            'borderColor': '$error600',
            'boxShadow': 'inset 0 0 0 1px $error600',
          },
          ':focus': {
            // @ts-ignore
            boxShadow: 'inset 0 0 0 1px $primary700',
          },
          '_dark': {
            ':invalid': {
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  // @ts-ignore
                  boxShadow: 'inset 0 0 0 1px $error400',
                },
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  // @ts-ignore
                  boxShadow: 'inset 0 0 0 1px $primary400',
                },
              },
              ':hover': {
                borderColor: '$error400',
              },
              'borderColor': '$error400',
              'boxShadow': 'inset 0 0 0 1px $error400',
            },
            ':focus': {
              // @ts-ignore
              boxShadow: 'inset 0 0 0 1px $primary400',
            },
          },
        },
        rounded: {
          'px': '$4',
          'borderRadius': 999,
          '_input': {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                // @ts-ignore
                boxShadow: 'inset 0 0 0 1px $error600',
              },
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                // @ts-ignore
                boxShadow: 'inset 0 0 0 1px $primary600',
              },
            },
            ':hover': {
              borderColor: '$error600',
            },
            'borderColor': '$error600',
            'boxShadow': 'inset 0 0 0 1px $error600',
          },
          ':focus': {
            // @ts-ignore
            boxShadow: 'inset 0 0 0 1px $primary700',
          },
          '_dark': {
            ':invalid': {
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  // @ts-ignore
                  boxShadow: 'inset 0 0 0 1px $error400',
                },
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  // @ts-ignore
                  boxShadow: 'inset 0 0 0 1px $primary400',
                },
              },
              ':hover': {
                borderColor: '$error400',
              },
              'borderColor': '$error400',
              'boxShadow': 'inset 0 0 0 1px $error400',
            },
            ':focus': {
              // @ts-ignore
              boxShadow: 'inset 0 0 0 1px $primary400',
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
