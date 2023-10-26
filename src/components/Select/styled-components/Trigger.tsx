import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    // @ts-ignore
    'borderWidth': 1,
    'borderColor': '$backgroundLight.300',
    // @ts-ignore
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'overflow': 'hidden',
    'alignItems': 'center',

    ':hover': {
      borderColor: '$borderLight.400',
    },

    ':focus': {
      borderColor: '$primary.700',
    },

    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$backgroundLight.300',
      },
    },

    '_input': {
      // @ts-ignore
      py: 'auto',
      // @ts-ignore
      px: '$3',
    },

    '_icon': {
      color: '$backgroundLight.500',
      _dark: {
        color: '$backgroundLight.500',
      },
    },

    '_dark': {
      'borderColor': '$borderDark.700',
      ':hover': {
        borderColor: '$borderDark.400',
      },
      ':focus': {
        borderColor: '$primary.400',
      },
      ':disabled': {
        ':hover': {
          borderColor: '$borderDark.700',
        },
      },
    },

    'variants': {
      size: {
        xl: {
          height: '$12',
          _input: {
            // @ts-ignore
            fontSize: '$xl',
          },
          _icon: {
            height: '$6',
            width: '$6',
          },
        },
        lg: {
          height: '$11',
          _input: {
            // @ts-ignore
            fontSize: '$lg',
          },
          _icon: {
            height: '$5',
            width: '$5',
          },
        },
        md: {
          height: '$10',
          _input: {
            // @ts-ignore
            fontSize: '$md',
          },
          _icon: {
            height: '$4',
            width: '$4',
          },
        },
        sm: {
          height: '$9',
          _input: {
            // @ts-ignore
            fontSize: '$sm',
          },
          _icon: {
            height: '$3.5',
            width: '$3.5',
          },
        },
      },
      variant: {
        // @ts-ignore
        underlined: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
            // @ts-ignore
            px: '$0',
          },
          // @ts-ignore
          'borderWidth': 0,
          // @ts-ignore
          'borderRadius': 0,
          'borderBottomWidth': '$1',
          ':focus': {
            'borderColor': '$primary.700',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $primary.700',
            },
            ':hover': {
              borderColor: '$primary.700',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $primary.600',
              },
            },
          },
          ':invalid': {
            'borderBottomWidth': 2,
            'borderBottomColor': '$error.700',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $error.700',
            },
            ':hover': {
              borderBottomColor: '$error.700',
            },
            ':focus': {
              'borderBottomColor': '$error.700',
              ':hover': {
                borderBottomColor: '$error.700',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error.700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderBottomColor: '$error.700',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error.700',
                },
              },
            },
          },
          '_dark': {
            ':focus': {
              borderColor: '$primary.400',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $primary.400',
              },
            },
            ':invalid': {
              'borderColor': '$error.400',
              '_web': {
                boxShadow: 'inset 0 -1px 0 0 $error.400',
              },
              ':hover': {
                borderBottomColor: '$error.400',
              },
              ':focus': {
                'borderBottomColor': '$error.400',
                ':hover': {
                  borderBottomColor: '$error.400',
                  _web: {
                    boxShadow: 'inset 0 -1px 0 0 $error.400',
                  },
                },
              },

              ':disabled': {
                ':hover': {
                  borderBottomColor: '$error.400',
                  _web: {
                    boxShadow: 'inset 0 -1px 0 0 $error.400',
                  },
                },
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
          ':focus': {
            'borderColor': '$primary.700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $primary.700',
            },
            ':hover': {
              borderColor: '$primary.700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary.600',
              },
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
              'borderColor': '$error.700',
              ':hover': {
                borderColor: '$error.700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error.700',
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
                'borderColor': '$error.400',
                ':hover': {
                  borderColor: '$error.400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error.400',
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
        // @ts-ignore
        rounded: {
          // @ts-ignore
          'borderRadius': 999,
          '_input': {
            // @ts-ignore
            px: '$4',
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },
          ':focus': {
            'borderColor': '$primary.700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $primary.700',
            },
            ':hover': {
              borderColor: '$primary.700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary.600',
              },
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
              'borderColor': '$error.700',
              ':hover': {
                borderColor: '$error.700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error.700',
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
                'borderColor': '$error.400',
                ':hover': {
                  borderColor: '$error.400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error.400',
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
      size: 'md',
      variant: 'outline',
    },
  },

  { descendantStyle: ['_input', '_icon'] }
);
