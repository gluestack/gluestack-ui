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
    bg: '$background50',
  },

  ':active': {
    bg: '$background100',
  },

  ':focus': {
    bg: '$background100',
  },

  '_web': {
    ':focusVisible': {
      bg: '$background100',
    },
  },
});
