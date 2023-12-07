// @ts-nocheck
import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'backgroundColor': '$primary.600',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',

    '_text': {
      color: '$text.50',
      fontWeight: '$normal',
      _dark: {
        color: '$text.50',
      },
    },

    '_icon': {
      color: '$text.50',
      _dark: {
        color: '$textDark.0',
      },
    },
    '_spinner': {
      props: {
        color: '$backgroundLight0',
      },
      _dark: {
        props: {
          color: '$backgroundDark0',
        },
      },
    },

    'variants': {
      action: {
        primary: {
          'bg': '$primary.600',
          'borderColor': '$primary.300',

          ':hover': {
            bg: '$primary.700',
            borderColor: '$primary.400',
          },

          ':active': {
            bg: '$primary.800',
            borderColor: '$primary.700',
          },

          '_text': {
            'color': '$primary.600',
            ':hover': {
              color: '$primary.600',
            },
            ':active': {
              color: '$primary.700',
            },
          },

          '_icon': {
            'color': '$primary.600',
            ':hover': {
              color: '$primary.600',
            },
            ':active': {
              color: '$primary.700',
            },
          },

          '_spinner': {
            'props': {
              color: '$primary.600',
            },
            ':hover': {
              props: {
                color: '$primary.600',
              },
            },
            ':active': {
              props: {
                color: '$primary.700',
              },
            },
          },

          '_dark': {
            'bg': '$primary.400',
            'borderColor': '$primary.700',
            ':hover': {
              bg: '$primary..500',
              borderColor: '$primary.400',
            },
            ':active': {
              bg: '$primary.600',
              borderColor: '$primary.300',
            },
            '_text': {
              'color': '$primary.300',
              ':hover': {
                color: '$primary.300',
              },
              ':active': {
                color: '$primary.200',
              },
            },
            '_icon': {
              'color': '$primary.300',
              ':hover': {
                color: '$primary.300',
              },
              ':active': {
                color: '$primary.200',
              },
            },
            '_spinner': {
              'props': { color: '$primary.300' },
              ':hover': {
                props: { color: '$primary.300' },
              },
              ':active': {
                props: { color: '$primary.200' },
              },
            },

            ':focusVisible': {
              _web: {
                boxShadow: 'offset 0 0 0 2px $info400',
              },
            },
          },
        },
        secondary: {
          'bg': '$secondary.500',
          'borderColor': '$secondary.300',

          ':hover': {
            bg: '$secondary.600',
            borderColor: '$secondary.400',
          },

          ':active': {
            bg: '$secondary.700',
            borderColor: '$secondary.700',
          },

          '_text': {
            'color': '$secondary.600',
            ':hover': {
              color: '$secondary.600',
            },
            ':active': {
              color: '$secondary.700',
            },
          },
          '_icon': {
            'color': '$secondary.600',
            ':hover': {
              color: '$secondary.600',
            },
            ':active': {
              color: '$secondary.700',
            },
          },

          '_spinner': {
            'props': {
              color: '$secondary.600',
            },
            ':hover': {
              props: { color: '$secondary.600' },
            },
            ':active': {
              props: { color: '$secondary.700' },
            },
          },

          '_dark': {
            'bg': '$secondary.400',
            'borderColor': '$secondary.700',
            ':hover': {
              bg: '$secondary.500',
              borderColor: '$secondary.400',
            },
            ':active': {
              bg: '$secondary.600',
              borderColor: '$secondary.300',
            },
            '_text': {
              'color': '$secondary.300',
              ':hover': {
                color: '$secondary.300',
              },
              ':active': {
                color: '$secondary.200',
              },
            },
            '_icon': {
              'color': '$secondary.300',
              ':hover': {
                color: '$secondary.300',
              },
              ':active': {
                color: '$secondary.200',
              },
            },
            '_spinner': {
              'props': {
                color: '$secondary.300',
              },
              ':hover': {
                props: { color: '$secondary.300' },
              },
              ':active': {
                props: { color: '$secondary.200' },
              },
            },
          },
        },

        default: {
          'bg': '$transparent',
          ':hover': {
            bg: '$backgroundLight50',
          },
          ':active': {
            bg: 'transparent',
          },
          '_dark': {
            'bg': 'transparent',
            ':hover': {
              bg: '$backgroundDark900',
            },
            ':active': {
              bg: 'transparent',
            },
          },
        },
      },

      variant: {
        link: {
          'p': '$0',
          ':hover': {
            _text: {
              textDecorationLine: 'underline',
            },
          },
          ':active': {
            _text: {
              textDecorationLine: 'underline',
            },
          },
        },
        outline: {
          bg: 'transparent',
          borderWidth: '$1',
          borderColor: '$muted.300',
          _dark: {
            bg: 'transparent',
            borderColor: '$muted.700',
          },
        },
        solid: {
          '_text': {
            color: '$text.50',
          },
          '_icon': {
            color: '$text.50',
          },
          'bg': '$primary.600',
          ':hover': {
            bg: '$primary.700',
          },
          ':active': {
            bg: '$primary.800',
          },

          '_dark': {
            'bg': '$primary.600',
            ':hover': {
              bg: '$primary.700',
            },
            ':active': {
              bg: '$primary.800',
            },
          },
        },
      },

      size: {
        xs: {
          px: '$3.5',
          py: '$2',
          _icon: {
            h: '$3',
            w: '$3',
          },
          _text: {
            fontSize: '0.625rem',
          },
        },
        sm: {
          px: '$3',
          py: '$2',
          _icon: {
            h: '$4',
            w: '$4',
          },
          _text: {
            fontSize: '0.75rem',
          },
        },
        md: {
          px: '$3',
          py: '$2.5',
          _icon: {
            h: '$4.5',
            w: '$4.5',
          },
          _text: {
            // fontSize: '$md',
            fontSize: '0.875rem',
          },
        },
        lg: {
          p: '$3',
          _icon: {
            h: '$4.5',
            w: '$4.5',
          },
          _text: {
            fontSize: '1rem',
          },
        },
      },
    },

    'compoundVariants': [
      {
        action: 'primary',
        variant: 'link',
        value: {
          'p': '$0',
          'bg': 'transparent',

          ':hover': {
            bg: 'transparent',
            _text: {
              textDecorationLine: 'underline',
            },
          },
          ':active': {
            bg: 'transparent',
            _text: {
              color: '$primary.800',
              textDecorationLine: 'underline',
            },
          },

          '_text': {
            color: '$primary.600',
          },
          ':focus': {
            _web: {
              outlineWidth: '0',
              boxShadow: '$primary.400 0px 0px 0px 2px',
            },
          },

          '_dark': {
            'bg': 'transparent',
            '_text': {
              color: '$primary.500',
            },

            ':hover': {
              bg: 'transparent',
              _text: {
                textDecorationLine: 'underline',
              },
            },
            ':active': {
              bg: 'transparent',
              _text: {
                color: '$primary.300',
              },
            },
            ':focus': {
              _web: {
                outlineWidth: '0',
                boxShadow: '$primary.500 0px 0px 0px 2px',
              },
            },
          },
        },
      },
      {
        action: 'secondary',
        variant: 'link',
        value: {
          'p': '$0',
          'bg': 'transparent',

          ':hover': {
            bg: 'transparent',
            _text: {
              textDecorationLine: 'underline',
            },
          },
          ':active': {
            bg: 'transparent',
            _text: {
              color: '$secondary.800',
              textDecorationLine: 'underline',
            },
          },

          '_text': {
            color: '$secondary.600',
          },
          ':focus': {
            _web: {
              outlineWidth: '0',
              boxShadow: '$secondary.400 0px 0px 0px 2px',
            },
          },

          '_dark': {
            'bg': 'transparent',
            '_text': {
              color: '$secondary.500',
            },

            ':hover': {
              bg: 'transparent',
              _text: {
                textDecorationLine: 'underline',
              },
            },
            ':active': {
              bg: 'transparent',
              _text: {
                color: '$secondary.300',
              },
            },
            ':focus': {
              _web: {
                outlineWidth: '0',
                boxShadow: '$secondary.500 0px 0px 0px 2px',
              },
            },
          },
        },
      },
      {
        action: 'primary',
        variant: 'outline',
        value: {
          'bg': 'transparent',
          ':hover': {
            bg: '$backgroundLight50',
          },
          ':active': {
            bg: 'transparent',
          },
          '_dark': {
            'bg': 'transparent',
            ':hover': {
              bg: '$backgroundDark900',
            },
            ':active': {
              bg: 'transparent',
            },
          },
        },
      },
      {
        action: 'secondary',
        variant: 'outline',
        value: {
          'bg': 'transparent',
          ':hover': {
            bg: '$backgroundLight50',
          },
          ':active': {
            bg: 'transparent',
          },
          '_dark': {
            'bg': 'transparent',
            ':hover': {
              bg: '$backgroundDark900',
            },
            ':active': {
              bg: 'transparent',
            },
          },
        },
      },
      {
        action: 'primary',
        variant: 'solid',
        value: {
          '_text': {
            props: {
              color: '$text.50',
            },
          },
          'bg': '$primary.600',
          ':hover': {
            bg: '$primary.700',
          },
          ':active': {
            bg: '$primary.800',
          },
          ':focus': {
            _web: {
              outlineWidth: '0',
              boxShadow: '$primary.400 0px 0px 0px 2px',
            },
          },

          '_dark': {
            'bg': '$primary.600',
            ':hover': {
              bg: '$primary.700',
            },
            ':active': {
              bg: '$primary.800',
            },
            ':focus': {
              _web: {
                outlineWidth: '0',
                boxShadow: '$primary.500 0px 0px 0px 2px',
              },
            },
          },
        },
      },
      {
        action: 'secondary',
        variant: 'solid',
        value: {
          '_text': {
            props: {
              color: '$text.50',
            },
          },
          'bg': '$secondary.600',
          ':hover': {
            bg: '$secondary.700',
          },
          ':active': {
            bg: '$secondary.800',
          },
          ':focus': {
            _web: {
              outlineWidth: '0',
              boxShadow: '$secondary.400 0px 0px 0px 2px',
            },
          },

          '_dark': {
            'bg': '$secondary.600',
            ':hover': {
              bg: '$secondary.700',
            },
            ':active': {
              bg: '$secondary.800',
            },
            ':focus': {
              _web: {
                outlineWidth: '0',
                boxShadow: '$secondary.500 0px 0px 0px 2px',
              },
            },
          },
        },
      },
    ],

    'defaultProps': {
      size: 'md',
      variant: 'solid',
      action: 'primary',
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: '$0.5',
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary300',
        },
      },
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
    ancestorStyle: ['_button'],
  }
);
