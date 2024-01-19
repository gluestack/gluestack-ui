import { createStyle } from '@gluestack-style/react';

export const CheckboxIndicator = createStyle({
  'justifyContent': 'center',
  'alignItems': 'center',
  'borderColor': '$border400',
  'bg': '$transparent',
  'borderRadius': 4,

  '_web': {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
    },
  },

  ':checked': {
    borderColor: '$primary600',
    bg: '$primary600',
  },

  ':hover': {
    'borderColor': '$border500',
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
      'borderColor': '$border400',
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
});
