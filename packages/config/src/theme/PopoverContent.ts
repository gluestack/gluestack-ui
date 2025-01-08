import { createStyle } from '@gluestack-style/react';

export const PopoverContent = createStyle({
  'bg': '$backgroundLight50',
  'rounded': '$lg',
  'overflow': 'hidden',
  ':transition': {
    type: 'spring',
    damping: 18,
    stiffness: 250,
    mass: 0.9,
    opacity: {
      type: 'timing',
      duration: 50,
      delay: 50,
    },
  },
  '_dark': {
    bg: '$backgroundDark900',
  },

  'defaultProps': {
    softShadow: '3',
  },
});
