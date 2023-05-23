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
    'alignContent': 'center',
    '_input': {
      py: '$2',
      px: '$3',
    },
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
          _icon: {
            color: '$textLight400',
            h: 18,
            w: 18,
          },
        },
        lg: {
          _input: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
          _icon: {
            color: '$textLight400',
            h: 16,
            w: 16,
          },
        },

        md: {
          _input: {
            fontSize: '$md',
            lineHeight: '$md',
          },
          _icon: {
            color: '$textLight400',
            h: 14,
            w: 14,
          },
        },

        sm: {
          _input: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },
          _icon: {
            color: '$textLight400',
            h: 12,
            w: 12,
          },
        },
      },
      variant: {
        underlined: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
            px: '$0',
            py: '$0',
            pb: '$2',
          },
          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',
          ':hover': {
            borderBottomColor: '$primary700',
          },
          ':focus': {
            borderColor: '$primary700',
            _web: {
              boxShadow: 'inset 0 -1px 0 0 $primary700',
            },
          },
          ':invalid': {
            'borderBottomWidth': 2,
            'borderBottomColor': '$error600',
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
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $error600',
            },
          },
          '_dark': {
            ':hover': {
              borderBottomColor: '$primary400',
            },
            ':focus': {
              borderColor: '$primary400',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $primary400',
              },
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
              '_web': {
                boxShadow: 'inset 0 -1px 0 0 $error400',
              },
            },
          },
        },
        outline: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error600',
                },
              },
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary600',
                },
              },
            },
            ':hover': {
              borderColor: '$error600',
            },
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error600',
            },
          },
          ':focus': {
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
          },
          '_dark': {
            ':invalid': {
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error400',
                  },
                },
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $primary400',
                  },
                },
              },
              ':hover': {
                borderColor: '$error400',
              },
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 0 0 1px $error400',
              },
            },
            ':focus': {
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary400',
              },
            },
          },
        },
        rounded: {
          'borderRadius': 999,
          '_input': {
            px: '$4',
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error600',
                },
              },
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary600',
                },
              },
            },
            ':hover': {
              borderColor: '$error600',
            },
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error600',
            },
          },
          ':focus': {
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
          },
          '_dark': {
            ':invalid': {
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error400',
                  },
                },
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $primary400',
                  },
                },
              },
              ':hover': {
                borderColor: '$error400',
              },
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 0 0 1px $error400',
              },
            },
            ':focus': {
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary400',
              },
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

  { descendantStyle: ['_input', '_icon'] }
);
