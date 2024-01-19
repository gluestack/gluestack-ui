import { createStyle } from '@gluestack-style/react';

export const Button = createStyle({
  'borderRadius': '$sm',
  'backgroundColor': '$primary500',
  'flexDirection': 'row',
  'justifyContent': 'center',
  'alignItems': 'center',

  '_text': {
    color: '$text0',
    fontWeight: '$semibold',
  },

  '_icon': {
    color: '$text0',
  },

  '_spinner': {
    props: {
      color: '$background0',
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
      },

      default: {
        'bg': '$transparent',

        ':hover': {
          bg: '$background50',
        },

        ':active': {
          bg: 'transparent',
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
          bg: '$background50',
        },

        ':active': {
          bg: 'transparent',
        },
      },
      solid: {
        _text: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _spinner: {
          'props': { color: '$text0' },
          ':hover': {
            props: { color: '$text0' },
          },
          ':active': {
            props: { color: '$text0' },
          },
        },

        _icon: {
          'props': { color: '$text0' },
          ':hover': {
            props: { color: '$text0' },
          },
          ':active': {
            props: { color: '$text0' },
          },
        },
      },
    },

    size: {
      xs: {
        px: '$3.5',
        h: '$8',
        _icon: {
          props: {
            size: '2xs',
          },
        },
        _text: {
          props: {
            size: 'xs',
          },
        },
      },
      sm: {
        px: '$4',
        h: '$9',
        _icon: {
          props: {
            size: 'sm',
          },
        },
        _text: {
          props: {
            size: 'sm',
          },
        },
      },
      md: {
        px: '$5',
        h: '$10',
        _icon: {
          props: {
            size: 'md',
          },
        },
        _text: {
          props: {
            size: 'md',
          },
        },
      },
      lg: {
        px: '$6',
        h: '$11',
        _icon: {
          props: {
            size: 'md',
          },
        },
        _text: {
          props: {
            size: 'lg',
          },
        },
      },
      xl: {
        px: '$7',
        h: '$12',
        _icon: {
          props: {
            size: 'lg',
          },
        },
        _text: {
          props: {
            size: 'xl',
          },
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
      },
    },
    {
      action: 'primary',
      variant: 'outline',
      value: {
        'bg': 'transparent',

        ':hover': {
          bg: '$background50',
        },

        ':active': {
          bg: 'transparent',
        },
      },
    },
    {
      action: 'secondary',
      variant: 'outline',
      value: {
        'bg': 'transparent',

        ':hover': {
          bg: '$background50',
        },

        ':active': {
          bg: 'transparent',
        },
      },
    },
    {
      action: 'positive',
      variant: 'outline',
      value: {
        'bg': 'transparent',

        ':hover': {
          bg: '$background50',
        },

        ':active': {
          bg: 'transparent',
        },
      },
    },
    {
      action: 'negative',
      variant: 'outline',
      value: {
        'bg': 'transparent',

        ':hover': {
          bg: '$background50',
        },

        ':active': {
          bg: 'transparent',
        },
      },
    },
    {
      action: 'primary',
      variant: 'solid',
      value: {
        _text: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _icon: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _spinner: {
          'props': { color: '$text0' },
          ':hover': {
            props: { color: '$text0' },
          },
          ':active': {
            props: { color: '$text0' },
          },
        },
      },
    },
    {
      action: 'secondary',
      variant: 'solid',
      value: {
        _text: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _icon: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _spinner: {
          'props': { color: '$text0' },
          ':hover': {
            props: { color: '$text0' },
          },
          ':active': {
            props: { color: '$text0' },
          },
        },
      },
    },
    {
      action: 'positive',
      variant: 'solid',
      value: {
        _text: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _icon: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
          'props': { color: '$text0' },
        },

        _spinner: {
          'props': { color: '$text0' },
          ':hover': {
            props: { color: '$text0' },
          },
          ':active': {
            props: { color: '$text0' },
          },
        },
      },
    },
    {
      action: 'negative',
      variant: 'solid',
      value: {
        _text: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _icon: {
          'color': '$text0',
          ':hover': {
            color: '$text0',
          },
          ':active': {
            color: '$text0',
          },
        },

        _spinner: {
          'props': { color: '$text0' },
          ':hover': {
            props: { color: '$text0' },
          },
          ':active': {
            props: { color: '$text0' },
          },
        },
      },
    },
  ],

  'props': {
    size: 'md',
    variant: 'solid',
    action: 'primary',
  },

  '_web': {
    ':focusVisible': {
      outlineWidth: '$0.5',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
    },
  },

  ':disabled': {
    opacity: 0.4,
  },
});
