// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderWidth': 1,
    'borderColor': '$backgroundLight.300',
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
      py: 'auto',
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
          h: '$12',
          _input: {
            fontSize: '$xl',
          },
          _icon: {
            h: '$6',
            w: '$6',
          },
        },
        lg: {
          h: '$11',
          _input: {
            fontSize: '$lg',
          },
          _icon: {
            h: '$5',
            w: '$5',
          },
        },
        md: {
          h: '$10',
          _input: {
            fontSize: '$md',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        sm: {
          h: '$9',
          _input: {
            fontSize: '$sm',
          },
          _icon: {
            h: '$3.5',
            w: '$3.5',
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
          },
          'borderWidth': 0,
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
        rounded: {
          'borderRadius': 999,
          '_input': {
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
