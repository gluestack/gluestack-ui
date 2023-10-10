import { createStyle } from '@gluestack-style/react';

export const Textarea = createStyle({
  'w': '100%',
  'borderWidth': 1,
  'borderColor': '$backgroundLight300',
  'borderRadius': '$sm',
  'h': 100,
  '_input': {
    p: '$3',
    _web: {
      outlineWidth: 0,
      outline: 'none',
    },
  },
  ':hover': {
    borderColor: '$borderLight400',
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
      borderColor: '$backgroundLight300',
    },
  },
  '_dark': {
    'borderColor': '$borderDark700',
    ':hover': {
      borderColor: '$borderDark600',
    },
    ':focus': {
      'borderColor': '$primary400',
      ':hover': {
        borderColor: '$primary400',
      },
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
            ':hover': {
              borderColor: '$primary700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary700',
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
        '_dark': {
          ':focus': {
            borderColor: '$primary400',
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary400',
            },
          },
          ':invalid': {
            'borderColor': '$error400',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error400',
            },
            ':hover': {
              borderColor: '$error400',
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary400',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary400',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error400',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error400',
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
});
