import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'px': '$3',
    'py': '$2',
    'position': 'relative',
    'minWidth': '50%',
    'maxWidth': 500,

    ':hover': {
      borderColor: '$primary700',
    },

    ':invalid': {
      ':active': {
        borderColor: '$primary700',
        _web: {
          boxShadow: `0 0 0 2px $primary700`,
        },
      },
      ':hover': {
        borderColor: '$error600',
      },
      'borderColor': '$error600',
      '_web': {
        boxShadow: `0 0 0 2px $error600`,
      },
    },

    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$backgroundLight300',
      },
    },

    ':active': {
      borderColor: '$primary700',
      _web: {
        boxShadow: `0 0 0 2px $primary700`,
      },
    },

    ':focus': {
      borderColor: '$primary700',
      _web: {
        boxShadow: `0 0 0 2px $primary700`,
      },
    },

    ':focusVisible': {
      _web: {
        boxShadow: 'offset 0 0 0 2px $primary700',
      },
    },

    '_dark': {
      'borderColor': '$borderDark700',
      ':hover': {
        borderColor: '$primary400',
      },
      ':focus': {
        borderColor: '$primary400',
        _web: {
          boxShadow: `0 0 0 2px $primary400`,
        },
      },
      ':focusVisible': {
        _web: {
          boxShadow: 'offset 0 0 0 2px $primary400',
        },
      },
      ':active': {
        borderColor: '$primary400',
        _web: {
          boxShadow: `0 0 0 2px $primary400`,
        },
      },
      ':invalid': {
        ':active': {
          borderColor: '$primary400',
          _web: {
            boxShadow: `0 0 0 2px $primary400`,
          },
        },
        ':hover': {
          borderColor: '$error400',
        },
        'borderColor': '$error400',
        '_web': {
          boxShadow: `0 0 0 2px $error400`,
        },
      },
      ':disabled': {
        ':hover': {
          borderColor: '$borderDark700',
        },
      },
    },

    'variants': {
      variant: {
        underlined: {
          'px': '$0',
          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',
          ':invalid': {
            ':active': {
              borderWidth: '$0',
              borderColor: '$primary700',
              borderBottomWidth: '$2',
              _web: {
                boxShadow: `0 0 0 0`,
              },
            },
            'borderWidth': '$0',
            'borderColor': '$error600',
            'borderBottomWidth': '$2',
            '_web': {
              boxShadow: `0 0 0 0`,
            },
          },
          ':active': {
            borderWidth: '$0',
            _web: {
              borderColor: '$primary700',
              boxShadow: `0 0 0 0`,
            },
          },
          ':disabled': {
            ':hover': {
              borderColor: '$backgroundLight300',
            },
          },
        },

        outline: {
          _input: {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
        },

        rounded: {
          'px': '$4',
          'borderRadius': 999,
          ':disabled': {
            ':hover': {
              borderColor: '$backgroundLight300',
            },
          },
          '_dark': {
            ':hover': {
              borderColor: '$primary400',
            },
            ':focus': {
              borderColor: '$primary400',
            },
            ':focusVisible': {
              _web: {
                boxShadow: 'offset 0 0 0 2px $primary400',
              },
            },
            ':invalid': {
              borderColor: '$error400',
            },
          },
        },
      },

      size: {
        '2xl': {
          _itemList: {
            fontSize: '$2xl',
            lineHeight: '$2xl',
          },
        },

        'xl': {
          _itemList: {
            fontSize: '$xl',
            lineHeight: '$xl',
          },
        },

        'lg': {
          _itemList: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
        },

        'md': {
          _itemList: {
            fontSize: '$md',
            lineHeight: '$lg',
          },
        },

        'sm': {
          _itemList: {
            fontSize: '$sm',
            lineHeight: '$md',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_itemList'],
  }
);
