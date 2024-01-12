import { createStyle } from '@gluestack-style/react';

export const SelectActionsheetBackdrop = createStyle({
  ':initial': {
    opacity: 0,
  },

  ':animate': {
    opacity: 0.5,
  },

  ':exit': {
    opacity: 0,
  },

  'position': 'absolute',
  'left': 0,
  'top': 0,
  'right': 0,
  'bottom': 0,
  'bg': '$background950',

  // @ts-ignore
  '_web': {
    cursor: 'default',
  },

  'pointerEvents': 'auto',
});
