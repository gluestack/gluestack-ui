// @ts-nocheck
import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    //@ts-ignore
    'fontFamily': '$body',
    'borderWidth': 1,
    'borderColor': '$muted.300',
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'alignItems': 'center',
    'overflow': 'hidden',
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
      // justifyContent: 'space-between',
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
            fontSize: '$xl',
          },
        },

        lg: {
          _input: {
            fontSize: '$lg',
          },
        },
        md: {
          _input: {
            fontSize: '$md',
          },
        },
        sm: {
          _input: {
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
  { descendantStyle: ['_input'] },
  {}
);
