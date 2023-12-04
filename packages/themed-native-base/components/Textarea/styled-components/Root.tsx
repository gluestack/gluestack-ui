import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    //@ts-ignore
    'fontFamily': '$body',
    // @ts-ignore
    'borderWidth': 1,
    'borderColor': '$muted.300',
    // @ts-ignore
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'alignItems': 'center',
    'overflow': 'hidden',
    // @ts-ignore
    'w': '100%',
    'h': 100,
    ':disabled': {
      opacity: 0.4,
      _web: {
        disabled: true,
        cursor: 'not-allowed',
      },
    },
    '_web': {
      outlineWidth: '$0',
      overflow: 'auto',
      // @ts-ignore
      lineHeight: '$lg',
      outline: 'none',
      cursor: 'auto',
    },
    '_input': {
      props: {
        placeholderTextColor: '$text.400',
      },
      color: '$text.900',
    },
    ':hover': {
      borderColor: '$primary.600',
    },
    ':invalid': {
      'borderColor': '$error.600',
      ':hover': { borderColor: '$error.600' },
      '_web': {
        outlineWidth: '$0',
        boxShadow: `0 0 0 1px $error.600`,
      },
    },
    ':focus': {
      // @ts-ignore
      'bg': '$primary.600.alpha0.1',
      'borderColor': '$primary.600',
      ':hover': { borderColor: '$primary.600' },
      '_input': {
        outlineWidth: '$0',
      },
      '_web': {
        outlineWidth: '$0',
        boxShadow: `0 0 0 1px $primary.600`,
      },
      ':invalid': {
        '_web': {
          outlineWidth: '$0',
          boxShadow: `0 0 0 1px $error.600`,
        },
        'borderColor': '$error.600',
        ':hover': { borderColor: '$error.600' },
      },
      ':disabled': {
        '_input': {
          props: {
            placeholderTextColor: '$muted.700',
          },
        },
        ':hover': {
          borderColor: '$muted.300',
        },
      },
    },
    '_dark': {
      'flexDirection': 'row',
      'alignItems': 'center',
      'overflow': 'hidden',
      '_input': {
        props: {
          placeholderTextColor: '$text.600',
        },
        color: '$text.50',
      },
      'borderColor': '$muted.700',
      ':hover': {
        borderColor: '$primary.500',
      },
      ':focus': {
        'borderColor': '$primary.500',
        ':hover': { borderColor: '$primary.500' },
        '_web': {
          outlineWidth: '0',
          boxShadow: `0 0 0 1px $primary.500`,
        },
      },
      ':invalid': {
        'borderColor': '$error.500',
        '_web': {
          outlineWidth: '0',
          boxShadow: `0 0 0 1px $error.500`,
        },
        ':hover': { borderColor: '$error.500' },
      },
      '_ios': {
        selectionColor: '$warmGray.50',
      },
      '_android': {
        selectionColor: '$warmGray.50',
      },
      ':disabled': {
        '_input': {
          props: {
            placeholderTextColor: 'text.50',
          },
        },
        ':hover': {
          borderColor: 'muted.700',
        },
      },
    },

    'variants': {
      size: {
        xl: {
          _input: {
            // @ts-ignore
            fontSize: '$xl',
          },
        },

        lg: {
          _input: {
            // @ts-ignore
            fontSize: '$lg',
          },
        },
        md: {
          _input: {
            // @ts-ignore
            fontSize: '$md',
          },
        },
        sm: {
          _input: {
            // @ts-ignore
            fontSize: '$sm',
          },
        },
      },
      variant: {
        default: {
          '_input': {
            _web: {
              outlineWidth: '0',
              outline: 'none',
            },
          },
          ':focus': {
            borderColor: '$primary.700',
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary.700',
            },
          },
          ':invalid': {
            'borderColor': '$error.700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error.700',
            },
            ':hover': {
              borderColor: '$error.700',
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary.700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary.700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error.700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error.700',
                },
              },
            },
          },
          '_dark': {
            ':focus': {
              borderColor: '$primary.400',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary.400',
              },
            },
            ':invalid': {
              'borderColor': '$error.400',
              '_web': {
                boxShadow: 'inset 0 0 0 1px $error.400',
              },
              ':hover': {
                borderColor: '$error.400',
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary.400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $primary.400',
                  },
                },
              },
              ':disabled': {
                ':hover': {
                  borderColor: '$error.400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error.400',
                  },
                },
              },
            },
          },
        },
      },
    },

    'defaultProps': {
      variant: 'default',
      size: 'md',
    },
  },
  {
    componentName: 'Textarea',
    descendantStyle: ['_input'],
  } as const
);
