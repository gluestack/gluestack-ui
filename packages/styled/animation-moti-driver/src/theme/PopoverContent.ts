import { createStyle } from '@gluestack-style/react';

export const PopoverContent = createStyle({
  'bg': '$backgroundLight50',
  'rounded': '$lg',
  'overflow': 'hidden',
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
      duration: 250,
    },
  },
  // @ts-ignore
  '_dark': {
    bg: '$backgroundDark900',
  },

  'defaultProps': {
    softShadow: '3',
  },
});
