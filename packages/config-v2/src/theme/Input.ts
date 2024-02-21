import { createStyle } from '@gluestack-style/react';

export const Input = createStyle({
  'borderWidth': 1,
  'borderColor': '$background300',
  'borderRadius': '$sm',
  'flexDirection': 'row',
  'overflow': 'hidden',
  'alignContent': 'center',

  ':hover': {
    borderColor: '$border400',
  },

  ':focus': {
    'borderColor': '$primary700',
    ':hover': {
      borderColor: '$primary700',
    },
  },

  ':disabled': {
    'opacity': 0.4,
    ':hover': {
      borderColor: '$background300',
    },
  },

  '_input': {
    py: 'auto',
    px: '$3',
  },

  '_icon': {
    color: '$text400',
  },

  'variants': {
    size: {
      xl: {
        h: '$12',
        _input: {
          props: {
            size: 'xl',
          },
        },
        _icon: {
          props: {
            size: 'xl',
          },
        },
      },
      lg: {
        h: '$11',
        _input: {
          props: {
            size: 'lg',
          },
        },
        _icon: {
          props: {
            size: 'lg',
          },
        },
      },
      md: {
        h: '$10',
        _input: {
          props: {
            size: 'md',
          },
        },
        _icon: {
          props: {
            size: 'sm',
          },
        },
      },
      sm: {
        h: '$9',
        _input: {
          props: {
            size: 'sm',
          },
        },
        _icon: {
          props: {
            size: 'xs',
          },
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
          borderColor: '$primary700',
          _web: {
            boxShadow: 'inset 0 -1px 0 0 $primary700',
          },
        },

        ':invalid': {
          'borderBottomWidth': 2,
          'borderBottomColor': '$error700',
          '_web': {
            boxShadow: 'inset 0 -1px 0 0 $error700',
          },
          ':hover': {
            borderBottomColor: '$error700',
          },
          ':focus': {
            'borderBottomColor': '$error700',
            ':hover': {
              borderBottomColor: '$error700',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $error700',
              },
            },
          },
          ':disabled': {
            ':hover': {
              borderBottomColor: '$error700',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $error700',
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
          borderColor: '$primary700',
          _web: {
            boxShadow: 'inset 0 0 0 1px $primary700',
          },
        },

        ':invalid': {
          'borderColor': '$error700',
          '_web': {
            boxShadow: 'inset 0 0 0 1px $error700',
          },
          ':hover': {
            borderColor: '$error700',
          },
          ':focus': {
            'borderColor': '$error700',
            ':hover': {
              borderColor: '$error700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error700',
              },
            },
          },
          ':disabled': {
            ':hover': {
              borderColor: '$error700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error700',
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
          borderColor: '$primary700',
          _web: {
            boxShadow: 'inset 0 0 0 1px $primary700',
          },
        },

        ':invalid': {
          'borderColor': '$error700',
          '_web': {
            boxShadow: 'inset 0 0 0 1px $error700',
          },
          ':hover': {
            borderColor: '$error700',
          },
          ':focus': {
            'borderColor': '$error700',
            ':hover': {
              borderColor: '$error700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error700',
              },
            },
          },
          ':disabled': {
            ':hover': {
              borderColor: '$error700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error700',
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
});
