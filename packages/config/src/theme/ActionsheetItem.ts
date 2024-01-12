import { createStyle } from '@gluestack-style/react';

export const ActionsheetItem = createStyle({
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
    bg: '$backgroundLight50',
  },

  ':active': {
    bg: '$backgroundLight100',
  },

  ':focus': {
    bg: '$backgroundLight100',
  },

  '_web': {
    ':focusVisible': {
      bg: '$backgroundLight100',
    },
  },
});
