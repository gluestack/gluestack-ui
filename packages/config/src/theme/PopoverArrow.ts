import { createStyle } from '@gluestack-style/react';

export const PopoverArrow = createStyle({
  'bg': '$backgroundLight50',
  'zIndex': 1,
  'position': 'absolute',
  'overflow': 'hidden',
  '_dark': {
    bg: '$backgroundDark900',
  },
  'h': '$3.5',
  'w': '$3.5',
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
  'props': {
    softShadow: '3',
  },
});
