import { createStyle } from '@gluestack-style/react';

export const SelectActionsheetItem = createStyle({
  'p': '$3',
  'flexDirection': 'row',
  'alignItems': 'center',
  'rounded': '$sm',
  'w': '$full',

  ':disabled': {
    opacity: 0.4,
    _web: {
      // @ts-ignore
      pointerEvents: 'all !important',
      cursor: 'not-allowed',
    },
  },

  ':hover': {
    bg: '$backgroundLight100',
  },

  ':active': {
    bg: '$backgroundLight200',
  },

  ':checked': {
    bg: '$backgroundLight300',
  },

  ':focus': {
    bg: '$backgroundLight100',
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
    ':focusVisible': {
      bg: '$backgroundLight100',
      _dark: {
        bg: '$backgroundDark700',
      },
    },
  },
});
