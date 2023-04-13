import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    'w': '$full',
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'h': 100,
    '_input': {
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
      //@ts-ignore
      size: {
        xl: {
          _input: {
            fontSize: '$xl',
            py: 14,
          },
        },

        lg: {
          _input: {
            py: 12,
            fontSize: '$lg',
          },
        },
        md: {
          _input: {
            py: 10,
            fontSize: '$md',
          },
        },
        sm: {
          _input: {
            py: 8,
            fontSize: '$sm',
          },
        },
      },
      variant: {
        default: {
          '_input': {
            outlineWidth: '0',
            outline: 'none',
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
      variant: 'default',
      size: 'md',
    },
  },
  { descendantStyle: ['_input'] },
  {}
);
