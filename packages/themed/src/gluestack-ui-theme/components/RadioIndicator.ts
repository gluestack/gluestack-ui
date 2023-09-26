import { createStyle } from '@gluestack-style/react';

export const RadioIndicator = createStyle({
  'justifyContent': 'center',
  'alignItems': 'center',
  'bg': 'transparent',
  'borderColor': '$borderLight400',
  'borderWidth': 2,
  'borderRadius': 999,
  '_web': {
    ':focusVisible': {
      outlineWidth: 2,
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary400',
      },
    },
  },

  ':checked': {
    borderColor: '$primary600',
    bg: 'transparent',
  },

  ':hover': {
    'borderColor': '$borderLight500',
    'bg': 'transparent',

    ':checked': {
      bg: 'transparent',
      borderColor: '$primary700',
    },
    ':invalid': {
      borderColor: '$error700',
    },
    ':disabled': {
      ':invalid': {
        borderColor: '$error400',
        opacity: 0.4,
      },
      'borderColor': '$borderLight400',
      'opacity': 0.4,
    },
  },

  ':active': {
    bg: 'transparent',
    borderColor: '$primary800',
  },

  '_dark': {
    'borderColor': '$borderDark500',
    'bg': '$transparent',

    ':hover': {
      'borderColor': '$borderDark400',
      'bg': 'transparent',

      ':checked': {
        bg: 'transparent',
        borderColor: '$primary400',
      },
      ':invalid': {
        borderColor: '$error400',
      },
      ':disabled': {
        'borderColor': '$borderDark500',
        'opacity': 0.4,
        ':checked': {
          bg: 'transparent',
          borderColor: '$primary500',
        },
        ':invalid': {
          borderColor: '$error400',
        },
      },
    },

    ':checked': {
      borderColor: '$primary500',
    },

    ':active': {
      bg: 'transparent',
      borderColor: '$primary300',
    },
    ':invalid': {
      borderColor: '$error400',
    },
  },

  ':invalid': {
    borderColor: '$error700',
  },

  ':disabled': {
    'opacity': 0.4,
    ':checked': {
      borderColor: '$borderLight400',
      bg: 'transparent',
    },
    ':invalid': {
      borderColor: '$error400',
    },
  },
});
