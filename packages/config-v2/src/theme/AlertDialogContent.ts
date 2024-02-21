import { createStyle } from '@gluestack-style/react';

export const AlertDialogContent = createStyle({
  'bg': '$background50',
  'rounded': '$lg',
  'overflow': 'hidden',

  //@ts-ignore
  ':initial': {
    scale: 0.9,
    opacity: 0,
  },

  ':animate': {
    scale: 1,
    opacity: 1,
  },

  ':exit': {
    scale: 0.9,
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

  'defaultProps': {
    softShadow: '3',
  },
});
