import { createStyle } from '@gluestack-style/react';

export const Toast = createStyle({
  px: '$4',
  py: '$3',
  borderRadius: '$sm',
  flexDirection: 'row',
  variants: {
    action: {
      error: {
        bg: '$backgroundLightError',
        borderColor: '$error300',
        _icon: {
          color: '$error500',
        },
        _dark: {
          bg: '$backgroundDarkError',
          borderColor: '$error700',
          _icon: {
            color: '$error500',
          },
        },
      },
      warning: {
        bg: '$backgroundLightWarning',
        borderColor: '$warning300',
        _icon: {
          color: '$warning500',
        },
        _dark: {
          bg: '$backgroundDarkWarning',
          borderColor: '$warning700',
          _icon: {
            color: '$warning500',
          },
        },
      },
      success: {
        bg: '$backgroundLightSuccess',
        borderColor: '$success300',
        _icon: {
          color: '$success500',
        },
        _dark: {
          bg: '$backgroundDarkSuccess',
          borderColor: '$success700',
          _icon: {
            color: '$warning500',
          },
        },
      },
      info: {
        bg: '$backgroundLightInfo',
        borderColor: '$info300',
        _icon: {
          color: '$info500',
        },
        _dark: {
          bg: '$backgroundDarkInfo',
          borderColor: '$info700',
          _icon: {
            color: '$info500',
          },
        },
      },
      attention: {
        bg: '$backgroundLightMuted',
        borderColor: '$secondary300',
        _icon: {
          color: '$secondary600',
        },
        _dark: {
          bg: '$backgroundDarkMuted',
          borderColor: '$secondary700',
          _icon: {
            color: '$secondary400',
          },
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        borderWidth: '$1',
        bg: '$white',
        _dark: {
          bg: '$black',
        },
      },
      accent: {
        borderLeftWidth: '$4',
      },
    },
  },
  m: '$3',

  _web: {
    props: {
      pointerEvents: 'auto',
    },
  },
  defaultProps: {
    hardShadow: '5',
    variant: 'solid',
    action: 'attention',
  },
});
