import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'fontFamily': '$body',
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'alignItems': 'center',
    'overflow': 'hidden',
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
      lineHeight: '$lg', // Todo: Move to _web inside size so that sm and xs don't have this much height
      outline: 'none',
      cursor: 'auto',
    },
    '_input': {
      props: {
        placeholderTextColor: '$text.400',
      },
      color: '$text.900',
    },
    'borderColor': '$muted.300',
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
        '2xl': {
          // h: '$12',
          _input: {
            fontSize: '$2xl',
          },
          _icon: {
            h: '$6',
            w: '$6',
          },
        },
        'xl': {
          // h: '$12',
          _input: {
            fontSize: '$xl',
          },
          _icon: {
            h: '$6',
            w: '$6',
          },
        },
        'lg': {
          // h: '$11',
          _input: {
            fontSize: '$lg',
          },
          _icon: {
            h: '$5',
            w: '$5',
          },
        },
        'md': {
          // h: '$10',
          _input: {
            fontSize: '$md',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        'sm': {
          // h: '$9',
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
        rounded: {
          'borderRadius': '$full',
          'borderWidth': '$1',
          ':focus': {
            bg: '$primary.600.alpha0.1',
          },
        },
        outline: {
          'borderWidth': '$1',
          ':focus': {
            bg: '$primary.600.alpha0.1',
          },
        },
        filled: {
          'borderWidth': '$1',
          ':focus': {
            bg: '$primary.600.alpha0.1',
          },
          ':hover': {
            borderWidth: '1',
            _disabled: {
              borderWidth: '$0',
            },
          },
          'bg': '$muted.100',
          'borderColor': '$muted.100',

          '_dark': {
            bg: '$muted.800',
            borderColor: '$muted.800',
          },
        },
        unstyled: {
          'borderWidth': '$0',
          ':focus': {
            bg: 'transparent',
          },
          ':invalid': {
            _web: {
              outlineWidth: '$0',
            },
          },
          '_web': {
            ':focus': {
              outlineWidth: '$0',
            },
          },
        },
        underlined: {
          'borderWidth': '$0',
          'pl': '$0',
          'borderBottomWidth': '$1',
          ':focus': {
            _web: {
              outlineWidth: '0',
              boxShadow: `0 1px 0 0 $primary.600`,
            },
          },
          ':invalid': {
            _web: {
              outlineWidth: 0,
              boxShadow: `0 1px 0 0 $error.600`,
            },
          },

          '_dark': {
            ':focus': {
              _web: {
                outlineWidth: '0',
                boxShadow: `0 1px 0 0 $primary.500`,
              },
            },
            ':invalid': {
              _web: {
                outlineWidth: 0,
                boxShadow: `0 1px 0 0 $error.500`,
              },
            },
          },
          'borderRadius': 0,
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
