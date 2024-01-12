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
      attention: {
        bg: '$backgroundLightMuted',
        borderColor: '$secondary300',

        _icon: {
          color: '$secondary600',
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
  m: '$3',

  _web: {
    pointerEvents: 'auto',
  },
  defaultProps: {
    hardShadow: '5',
    variant: 'solid',
    action: 'attention',
  },
});
