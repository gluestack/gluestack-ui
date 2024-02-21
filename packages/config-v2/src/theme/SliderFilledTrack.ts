import { createStyle } from '@gluestack-style/react';

export const SliderFilledTrack = createStyle({
  'bg': '$primary500',

  ':focus': {
    bg: '$primary600',
  },

  ':active': {
    bg: '$primary600',
  },

  ':hover': {
    bg: '$primary600',
  },
});
