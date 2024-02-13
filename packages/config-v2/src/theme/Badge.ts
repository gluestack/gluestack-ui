import { createStyle } from '@gluestack-style/react';

export const Badge = createStyle({
  'flexDirection': 'row',
  'alignItems': 'center',
  'borderRadius': '$xs',
  'variants': {
    action: {
      error: {
        bg: '$backgroundError',
        borderColor: '$error300',

        _icon: {
          color: '$error600',
        },

        _text: {
          color: '$error600',
        },
      },
      warning: {
        bg: '$backgroundWarning',
        borderColor: '$warning300',

        _icon: {
          color: '$warning600',
        },

        _text: {
          color: '$warning600',
        },
      },
      success: {
        bg: '$backgroundSuccess',
        borderColor: '$success300',

        _icon: {
          color: '$success600',
        },

        _text: {
          color: '$success600',
        },
      },
      info: {
        bg: '$backgroundInfo',
        borderColor: '$info300',

        _icon: {
          color: '$info600',
        },

        _text: {
          color: '$info600',
        },
      },
      muted: {
        bg: '$background600',
        borderColor: '$secondary300',

        _icon: {
          color: '$secondary600',
        },

        _text: {
          color: '$secondary600',
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
        py: '$1',
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
        py: '$1',
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
        py: '$1',
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
