import { createStyle } from '@gluestack-style/react';

export const MenuItem = createStyle({
  'p': '$3',
  'flexDirection': 'row',
  'alignItems': 'center',

  ':hover': {
    bg: '$backgroundLight100',
  },

  ':disabled': {
    'opacity': 0.4,
    '_web': {
      cursor: 'not-allowed',
    },
    ':focus': {
      bg: 'transparent',
    },
    '_dark': {
      ':focus': {
        bg: 'transparent',
      },
    },
  },

  ':active': {
    bg: '$backgroundLight200',
  },

  ':focus': {
    bg: '$backgroundLight100',
    // @ts-ignore
    outlineWidth: '$0',
    outlineStyle: 'none',
  },

  ':focusVisible': {
    // @ts-ignore
    outlineWidth: '$0.5',
    outlineColor: '$primary700',
    outlineStyle: 'solid',
    _dark: {
      outlineColor: '$primary300',
    },
  },

  '_dark': {
    ':hover': {
      bg: '$backgroundDark800',
    },

    ':active': {
      bg: '$backgroundDark700',
    },

    ':focus': {
      bg: '$backgroundDark800',
    },
  },
  '_web': {
    cursor: 'pointer',
  },
});
