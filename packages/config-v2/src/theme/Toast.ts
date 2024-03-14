import { createStyle } from '@gluestack-style/react';

export const Toast = createStyle({
  px: '$4',
  py: '$3',
  borderRadius: '$sm',
  flexDirection: 'row',
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
      attention: {
        bg: '$backgroundMuted',
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
    hardShadow: '2',
    variant: 'solid',
    action: 'attention',
  },
});
