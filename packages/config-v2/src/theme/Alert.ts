import { createStyle } from '@gluestack-style/react';

export const Alert = createStyle({
  alignItems: 'center',
  p: '$3',
  flexDirection: 'row',
  borderRadius: '$sm',
  variants: {
    action: {
      error: {
        bg: '$backgroundError',
        borderColor: '$error300',

        _icon: {
          color: '$error500',
        },
      },
      warning: {
        bg: '$backgroundWarning',
        borderColor: '$warning300',

        _icon: {
          color: '$warning500',
        },
      },
      success: {
        bg: '$backgroundSuccess',
        borderColor: '$success300',

        _icon: {
          color: '$success500',
        },
      },
      info: {
        bg: '$backgroundInfo',
        borderColor: '$info300',

        _icon: {
          color: '$info500',
        },
      },
      muted: {
        bg: '$backgroundMuted',
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
        bg: 'transparent',
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
