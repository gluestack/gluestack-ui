import { createStyle } from '@gluestack-style/react';

export const CheckboxIndicator = createStyle({
  'justifyContent': 'center',
  'alignItems': 'center',
  'borderColor': '$borderLight400',
  'bg': '$transparent',
  'borderRadius': 4,

  '_web': {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary300',
      },
    },
  },

  ':checked': {
    borderColor: '$primary600',
    bg: '$primary600',
  },

  ':hover': {
    'borderColor': '$borderLight500',
    'bg': 'transparent',
    ':invalid': {
      borderColor: '$error700',
    },
    ':checked': {
      'bg': '$primary700',
      'borderColor': '$primary700',
      ':disabled': {
        'borderColor': '$primary600',
        'bg': '$primary600',
        'opacity': 0.4,
        ':invalid': {
          borderColor: '$error700',
        },
      },
    },
    ':disabled': {
      'borderColor': '$borderLight400',
      ':invalid': {
        borderColor: '$error700',
      },
    },
  },

  ':active': {
    ':checked': {
      bg: '$primary800',
      borderColor: '$primary800',
    },
  },
  ':invalid': {
    borderColor: '$error700',
  },
  ':disabled': {
    opacity: 0.4,
  },

  '_dark': {
    'borderColor': '$borderDark500',
    'bg': '$transparent',

    ':checked': {
      borderColor: '$primary500',
      bg: '$primary500',
    },
    ':hover': {
      'borderColor': '$borderDark400',
      'bg': 'transparent',
      ':invalid': {
        borderColor: '$error400',
      },
      ':checked': {
        'bg': '$primary400',
        'borderColor': '$primary400',
        ':disabled': {
          'borderColor': '$primary500',
          'bg': '$primary500',
          'opacity': 0.4,
          ':invalid': {
            borderColor: '$error400',
          },
        },
      },
      ':disabled': {
        'borderColor': '$borderDark500',
        ':invalid': {
          borderColor: '$error400',
        },
      },
    },
    ':active': {
      ':checked': {
        bg: '$primary300',
        borderColor: '$primary300',
      },
    },

    ':invalid': {
      borderColor: '$error400',
    },
    ':disabled': {
      opacity: 0.4,
    },
  },
});
