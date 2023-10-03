import { createStyle } from '@gluestack-style/react';

export const Badge = createStyle({
  'flexDirection': 'row',
  'alignItems': 'center',
  'borderRadius': '$xs',
  'variants': {
    action: {
      error: {
        bg: '$backgroundLightError',
        borderColor: '$error300',
        _icon: {
          color: '$error600',
        },
        _text: {
          color: '$error600',
        },
        _dark: {
          bg: '$backgroundDarkError',
          borderColor: '$error700',
          _text: {
            color: '$error400',
          },
          _icon: {
            color: '$error400',
          },
        },
      },
      warning: {
        bg: '$backgroundLightWarning',
        borderColor: '$warning300',
        _icon: {
          color: '$warning600',
        },
        _text: {
          color: '$warning600',
        },
        _dark: {
          bg: '$backgroundDarkWarning',
          borderColor: '$warning700',
          _text: {
            color: '$warning400',
          },
          _icon: {
            color: '$warning400',
          },
        },
      },
      success: {
        bg: '$backgroundLightSuccess',
        borderColor: '$success300',
        _icon: {
          color: '$success600',
        },
        _text: {
          color: '$success600',
        },
        _dark: {
          bg: '$backgroundDarkSuccess',
          borderColor: '$success700',
          _text: {
            color: '$success400',
          },
          _icon: {
            color: '$success400',
          },
        },
      },
      info: {
        bg: '$backgroundLightInfo',
        borderColor: '$info300',
        _icon: {
          color: '$info600',
        },
        _text: {
          color: '$info600',
        },
        _dark: {
          bg: '$backgroundDarkInfo',
          borderColor: '$info700',
          _text: {
            color: '$info400',
          },
          _icon: {
            color: '$info400',
          },
        },
      },
      muted: {
        bg: '$backgroundLightMuted',
        borderColor: '$secondary300',
        _icon: {
          color: '$secondary600',
        },
        _text: {
          color: '$secondary600',
        },
        _dark: {
          bg: '$backgroundDarkMuted',
          borderColor: '$secondary700',
          _text: {
            color: '$secondary400',
          },
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
      },
    },

    size: {
      sm: {
        px: '$2',
        _icon: {
          props: {
            size: '2xs',
          },
        },
        _text: {
          props: {
            size: '2xs',
          },
        },
      },
      md: {
        px: '$2',
        _icon: {
          props: {
            size: 'xs',
          },
        },
        _text: {
          props: {
            size: 'xs',
          },
        },
      },
      lg: {
        px: '$2',
        _icon: {
          props: { size: 'sm' },
        },
        _text: {
          props: { size: 'sm' },
        },
      },
    },
  },

  ':disabled': {
    opacity: 0.5,
  },
  'defaultProps': {
    action: 'info',
    variant: 'solid',
    size: 'md',
  },
});
