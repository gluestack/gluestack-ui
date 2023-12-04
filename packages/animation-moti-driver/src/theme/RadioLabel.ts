import { createStyle } from '@gluestack-style/react';

export const RadioLabel = createStyle({
  'color': '$textLight600',
  ':checked': {
    color: '$textLight900',
  },
  ':hover': {
    'color': '$textLight900',
    ':checked': {
      color: '$textLight900',
    },
    ':disabled': {
      'color': '$textLight600',
      ':checked': {
        color: '$textLight900',
      },
    },
  },
  ':active': {
    'color': '$textLight900',
    ':checked': {
      color: '$textLight900',
    },
  },

  ':disabled': {
    opacity: 0.4,
  },

  '_web': {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
  },
  'userSelect': 'none',
  '_dark': {
    'color': '$textDark400',
    ':checked': {
      color: '$textDark100',
    },
    ':hover': {
      'color': '$textDark100',
      ':checked': {
        color: '$textDark100',
      },
      ':disabled': {
        'color': '$textDark400',
        ':checked': {
          color: '$textDark100',
        },
      },
    },
    ':active': {
      'color': '$textDark100',
      ':checked': {
        color: '$textDark100',
      },
    },
  },
});
