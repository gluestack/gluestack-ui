import { createStyle } from '@gluestack-style/react';

export const CheckboxLabel = createStyle({
  'color': '$text600',

  ':checked': {
    color: '$text900',
  },

  ':hover': {
    'color': '$text900',
    ':checked': {
      'color': '$text900',
      ':disabled': {
        color: '$text900',
      },
    },
    ':disabled': {
      color: '$text600',
    },
  },

  ':active': {
    'color': '$text900',

    ':checked': {
      color: '$text900',
    },
  },

  ':disabled': {
    opacity: 0.4,
  },

  '_web': {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
});
