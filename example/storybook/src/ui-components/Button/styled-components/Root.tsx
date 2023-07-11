// @ts-nocheck
import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'backgroundColor': '$primary500',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',

    '_text': {
      color: '$textLight0',
      fontWeight: '$semibold',
      _dark: {
        color: '$textDark0',
      },
    },

    '_icon': {
      color: '$textLight0',
      _dark: {
        color: '$textDark0',
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
          'bg': '$primary500',
          'borderColor': '$primary300',

          ':hover': {
            bg: '$primary600',
            borderColor: '$primary400',
          },

          ':active': {
            bg: '$primary700',
            borderColor: '$primary700',
          },

          '_text': {
            'color': '$primary600',
            ':hover': {
              color: '$primary600',
            },
            ':active': {
              color: '$primary700',
            },
          },

          '_icon': {
            'color': '$primary600',
            ':hover': {
              color: '$primary600',
            },
            ':active': {
              color: '$primary700',
            },
          },

          '_spinner': {
            'props': {
              color: '$primary600',
            },
            ':hover': {
              props: {
                color: '$primary600',
              },
            },
            ':active': {
              props: {
                color: '$primary700',
              },
            },
          },

          '_dark': {
            'bg': '$primary400',
            'borderColor': '$primary700',
            ':hover': {
              bg: '$primary500',
              borderColor: '$primary400',
            },
            ':active': {
              bg: '$primary600',
              borderColor: '$primary300',
            },
            '_text': {
              'color': '$primary300',
              ':hover': {
                color: '$primary300',
              },
              ':active': {
                color: '$primary200',
              },
            },
            '_icon': {
              'color': '$primary300',
              ':hover': {
                color: '$primary300',
              },
              ':active': {
                color: '$primary200',
              },
            },
            '_spinner': {
              'props': { color: '$primary300' },
              ':hover': {
                props: { color: '$primary300' },
              },
              ':active': {
                props: { color: '$primary200' },
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
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _spinner: {
            'props': { color: '$textLight0' },
            ':hover': {
              props: { color: '$textLight0' },
            },
            ':active': {
              props: { color: '$textLight0' },
            },
          },
          _icon: {
            'props': { color: '$textLight0' },
            ':hover': {
              props: { color: '$textLight0' },
            },
            ':active': {
              props: { color: '$textLight0' },
            },
          },
          _dark: {
            _text: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _spinner: {
              'props': { color: '$textDark0' },
              ':hover': {
                props: { color: '$textDark0' },
              },
              ':active': {
                props: { color: '$textDark0' },
              },
            },
            _icon: {
              'props': { color: '$textDark0' },
              ':hover': {
                props: { color: '$textDark0' },
              },
              ':active': {
                props: { color: '$textDark0' },
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
    'compoundVariants': [
      {
        action: 'primary',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',
          ':hover': {
            bg: 'transparent',
          },
          ':active': {
            bg: 'transparent',
          },
          '_dark': {
            'bg': 'transparent',
            ':hover': {
              bg: 'transparent',
            },
            ':active': {
              bg: 'transparent',
            },
          },
        },
      },
      {
        action: 'secondary',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',
          ':hover': {
            bg: 'transparent',
          },
          ':active': {
            bg: 'transparent',
          },
          '_dark': {
            'bg': 'transparent',
            ':hover': {
              bg: 'transparent',
            },
            ':active': {
              bg: 'transparent',
            },
          },
        },
      },
      {
        action: 'positive',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',
          ':hover': {
            bg: 'transparent',
          },
          ':active': {
            bg: 'transparent',
          },
          '_dark': {
            'bg': 'transparent',
            ':hover': {
              bg: 'transparent',
            },
            ':active': {
              bg: 'transparent',
            },
          },
        },
      },
      {
        action: 'negative',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',
          ':hover': {
            bg: 'transparent',
          },
          ':active': {
            bg: 'transparent',
          },
          '_dark': {
            'bg': 'transparent',
            ':hover': {
              bg: 'transparent',
            },
            ':active': {
              bg: 'transparent',
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
        action: 'positive',
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
        action: 'negative',
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
          _text: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _icon: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _spinner: {
            'props': { color: '$textLight0' },
            ':hover': {
              props: { color: '$textLight0' },
            },
            ':active': {
              props: { color: '$textLight0' },
            },
          },
          _dark: {
            _text: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _icon: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _spinner: {
              'props': { color: '$textDark0' },
              ':hover': {
                props: { color: '$textDark0' },
              },
              ':active': {
                props: { color: '$textDark0' },
              },
            },
          },
        },
      },
      {
        action: 'secondary',
        variant: 'solid',
        value: {
          _text: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _icon: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _spinner: {
            'props': { color: '$textLight0' },
            ':hover': {
              props: { color: '$textLight0' },
            },
            ':active': {
              props: { color: '$textLight0' },
            },
          },
          _dark: {
            _text: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _icon: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _spinner: {
              'props': { color: '$textDark0' },
              ':hover': {
                props: { color: '$textDark0' },
              },
              ':active': {
                props: { color: '$textDark0' },
              },
            },
          },
        },
      },
      {
        action: 'positive',
        variant: 'solid',
        value: {
          _text: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _icon: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
            'props': { color: '$textLight0' },
          },
          _spinner: {
            'props': { color: '$textLight0' },
            ':hover': {
              props: { color: '$textLight0' },
            },
            ':active': {
              props: { color: '$textLight0' },
            },
          },

          _dark: {
            _text: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _icon: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _spinner: {
              'props': { color: '$textDark0' },
              ':hover': {
                props: { color: '$textDark0' },
              },
              ':active': {
                props: { color: '$textDark0' },
              },
            },
          },
        },
      },
      {
        action: 'negative',
        variant: 'solid',
        value: {
          _text: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _icon: {
            'color': '$textLight0',
            ':hover': {
              color: '$textLight0',
            },
            ':active': {
              color: '$textLight0',
            },
          },
          _spinner: {
            'props': { color: '$textLight0' },
            ':hover': {
              props: { color: '$textLight0' },
            },
            ':active': {
              props: { color: '$textLight0' },
            },
          },
          _dark: {
            _text: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _icon: {
              'color': '$textDark0',
              ':hover': {
                color: '$textDark0',
              },
              ':active': {
                color: '$textDark0',
              },
            },
            _spinner: {
              'props': { color: '$textDark0' },
              ':hover': {
                props: { color: '$textDark0' },
              },
              ':active': {
                props: { color: '$textDark0' },
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
