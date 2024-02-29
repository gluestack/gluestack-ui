import { createStyle } from '@gluestack-style/react';

export const Menu = createStyle({
  ':initial': {
    opacity: 0,
  },

  ':animate': {
    opacity: 1,
  },

  ':exit': {
    opacity: 0,
  },

  ':transition': {
    type: 'spring',
    damping: 18,
    stiffness: 250,
    opacity: {
      type: 'timing',
      duration: 200,
    },
  },

  'minWidth': 200,
  'p': '$1',
  'rounded': '$sm',
  'bg': '$background0',
  'borderColor': '$border200',
  'defaultProps': {
    hardshadow: '5',
  },
});
