import { createStyle } from '@gluestack-style/react';

export const Alert = createStyle({
  alignItems: 'center',
  p: '$3',
  flexDirection: 'row',
  borderRadius: '$sm',
  variants: {
    action: {
      error: {
        bg: '$backgroundLightError',
        borderColor: '$error300',

        _icon: {
          color: '$error500',
        },
      },
      warning: {
        bg: '$backgroundLightWarning',
        borderColor: '$warning300',

        _icon: {
          color: '$warning500',
        },
      },
      success: {
        bg: '$backgroundLightSuccess',
        borderColor: '$success300',

        _icon: {
          color: '$success500',
        },
      },
      info: {
        bg: '$backgroundLightInfo',
        borderColor: '$info300',

        _icon: {
          color: '$info500',
        },
      },
      muted: {
        bg: '$backgroundLightMuted',
        borderColor: '$secondary300',

        _icon: {
          color: '$secondary500',
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        borderWidth: '$1',
        bg: '$white',
      },
      accent: {
        borderLeftWidth: '$4',
      },
    },
  },

  defaultProps: {
    variant: 'solid',
    action: 'info',
  },
});
