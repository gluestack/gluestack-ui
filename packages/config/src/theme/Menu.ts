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
  'py': '$2',
  'rounded': '$sm',
  'bg': '$background0',

  'defaultProps': {
    softShadow: '3',
  },
});
