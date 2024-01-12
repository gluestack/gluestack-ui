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
    bg: '$background100',
  },

  ':active': {
    bg: '$background200',
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
