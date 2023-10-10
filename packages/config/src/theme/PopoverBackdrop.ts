import { createStyle } from '@gluestack-style/react';

export const PopoverBackdrop = createStyle({
  ':initial': {
    opacity: 0,
  },
  ':animate': {
    opacity: 0.5,
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
  'position': 'absolute',
  'left': 0,
  'top': 0,
  'right': 0,
  'bottom': 0,
  'bg': '$backgroundLight950',
  // @ts-ignore
  '_dark': {
    bg: '$backgroundDark950',
  },
  // @ts-ignore
  '_web': {
    cursor: 'default',
  },
});
