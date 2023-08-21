// @ts-nocheck
import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'backgroundColor': '$primary.500',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',

    '_text': {
      color: '$textLight.0',
      fontWeight: '$semibold',
      _dark: {
        color: '$textDark.0',
      },
    },

    '_icon': {
      color: '$textLight.0',
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
          'bg': '$primary.500',
          'borderColor': '$primary.300',

          ':hover': {
            bg: '$primary.600',
            borderColor: '$primary.400',
          },

          ':active': {
            bg: '$primary.700',
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
          'bg': '$secondary500',
          'borderColor': '$secondary300',

          ':hover': {
            bg: '$secondary600',
            borderColor: '$secondary400',
          },

          ':active': {
            bg: '$secondary700',
            borderColor: '$secondary700',
          },

          '_text': {
            'color': '$secondary600',
            ':hover': {
              color: '$secondary600',
            },
            ':active': {
              color: '$secondary700',
            },
          },
          '_icon': {
            'color': '$secondary600',
            ':hover': {
              color: '$secondary600',
            },
            ':active': {
              color: '$secondary700',
            },
          },

          '_spinner': {
            'props': {
              color: '$secondary600',
            },
            ':hover': {
              props: { color: '$secondary600' },
            },
            ':active': {
              props: { color: '$secondary700' },
            },
          },

          '_dark': {
            'bg': '$secondary400',
            'borderColor': '$secondary700',
            ':hover': {
              bg: '$secondary500',
              borderColor: '$secondary400',
            },
            ':active': {
              bg: '$secondary600',
              borderColor: '$secondary300',
            },
            '_text': {
              'color': '$secondary300',
              ':hover': {
                color: '$secondary300',
              },
              ':active': {
                color: '$secondary200',
              },
            },
            '_icon': {
              'color': '$secondary300',
              ':hover': {
                color: '$secondary300',
              },
              ':active': {
                color: '$secondary200',
              },
            },
            '_spinner': {
              'props': {
                color: '$secondary300',
              },
              ':hover': {
                props: { color: '$secondary300' },
              },
              ':active': {
                props: { color: '$secondary200' },
              },
            },
          },
        },
        positive: {
          'bg': '$success500',
          'borderColor': '$success300',
          ':hover': {
            bg: '$success600',
            borderColor: '$success400',
          },

          ':active': {
            bg: '$success700',
            borderColor: '$success700',
          },

          '_text': {
            'color': '$success600',
            ':hover': {
              color: '$success600',
            },
            ':active': {
              color: '$success700',
            },
          },
          '_icon': {
            'color': '$success600',
            ':hover': {
              color: '$success600',
            },
            ':active': {
              color: '$success700',
            },
          },
          '_spinner': {
            'props': {
              color: '$success600',
            },
            ':hover': {
              props: { color: '$success600' },
            },
            ':active': {
              props: { color: '$success700' },
            },
          },
          '_dark': {
            'bg': '$success400',
            'borderColor': '$success700',
            ':hover': {
              bg: '$success500',
              borderColor: '$success400',
            },
            ':active': {
              bg: '$success600',
              borderColor: '$success300',
            },
            '_text': {
              'color': '$success300',
              ':hover': {
                color: '$success300',
              },
              ':active': {
                color: '$success200',
              },
            },
            '_icon': {
              'color': '$success300',
              ':hover': {
                color: '$success300',
              },
              ':active': {
                color: '$success200',
              },
            },
            '_spinner': {
              'props': {
                color: '$success300',
              },
              ':hover': {
                props: { color: '$success300' },
              },
              ':active': {
                props: { color: '$success200' },
              },
            },
            ':focusVisible': {
              _web: {
                boxShadow: 'offset 0 0 0 2px $info400',
              },
            },
          },
        },
        negative: {
          'bg': '$error500',
          'borderColor': '$error300',
          ':hover': {
            bg: '$error600',
            borderColor: '$error400',
          },

          ':active': {
            bg: '$error700',
            borderColor: '$error700',
          },
          '_text': {
            'color': '$error600',
            ':hover': {
              color: '$error600',
            },
            ':active': {
              color: '$error700',
            },
          },
          '_icon': {
            'color': '$error600',
            ':hover': {
              color: '$error600',
            },
            ':active': {
              color: '$error700',
            },
          },
          '_spinner': {
            'props': {
              color: '$error600',
            },
            ':hover': {
              props: { color: '$error600' },
            },
            ':active': {
              props: { color: '$error700' },
            },
          },
          '_dark': {
            'bg': '$error400',
            'borderColor': '$error700',
            ':hover': {
              bg: '$error500',
              borderColor: '$error400',
            },
            ':active': {
              bg: '$error600',
              borderColor: '$error300',
            },
            '_text': {
              'color': '$error300',
              ':hover': {
                color: '$error300',
              },
              ':active': {
                color: '$error200',
              },
            },
            '_icon': {
              'color': '$error300',
              ':hover': {
                color: '$error300',
              },
              ':active': {
                color: '$error200',
              },
            },
            '_spinner': {
              'props': {
                color: '$error300',
              },
              ':hover': {
                props: { color: '$error300' },
              },
              ':active': {
                props: { color: '$error200' },
              },
            },
            ':focusVisible': {
              _web: {
                boxShadow: 'offset 0 0 0 2px $info400',
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
          'px': '$0',
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
          'bg': 'transparent',
          'borderWidth': '$1',
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
        solid: {
          _text: {
            'color': '$textLight.0',
            ':hover': {
              color: '$textLight.0',
            },
            ':active': {
              color: '$textLight.0',
            },
          },
          _spinner: {
            'props': { color: '$textLight.0' },
            ':hover': {
              props: { color: '$textLight.0' },
            },
            ':active': {
              props: { color: '$textLight.0' },
            },
          },
          _icon: {
            'props': { color: '$textLight.0' },
            ':hover': {
              props: { color: '$textLight.0' },
            },
            ':active': {
              props: { color: '$textLight.0' },
            },
          },
          _dark: {
            _text: {
              'color': '$textDark.0',
              ':hover': {
                color: '$textDark.0',
              },
              ':active': {
                color: '$textDark.0',
              },
            },
            _spinner: {
              'props': { color: '$textDark.0' },
              ':hover': {
                props: { color: '$textDark.0' },
              },
              ':active': {
                props: { color: '$textDark.0' },
              },
            },
            _icon: {
              'props': { color: '$textDark.0' },
              ':hover': {
                props: { color: '$textDark.0' },
              },
              ':active': {
                props: { color: '$textDark.0' },
              },
            },
          },
        },
      },

      size: {
        xs: {
          px: '$3.5',
          h: '$8',
          _icon: {
            h: '$3',
            w: '$3',
          },
          _text: {
            fontSize: '$xs',
            lineHeight: '$sm',
          },
        },
        sm: {
          px: '$4',
          h: '$9',
          _icon: {
            h: '$4',
            w: '$4',
          },
          _text: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },
        },
        md: {
          px: '$5',
          h: '$10',
          _icon: {
            h: '$4.5',
            w: '$4.5',
          },
          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
        },
        lg: {
          px: '$6',
          h: '$11',
          _icon: {
            h: '$4.5',
            w: '$4.5',
          },
          _text: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
        },
        xl: {
          px: '$7',
          h: '$12',
          _icon: {
            h: '$5',
            w: '$5',
          },
          _text: {
            fontSize: '$xl',
            lineHeight: '$xl',
          },
        },
      },
    },

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
