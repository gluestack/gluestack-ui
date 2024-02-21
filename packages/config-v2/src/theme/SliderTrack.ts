import { createStyle } from '@gluestack-style/react';

export const SliderTrack = createStyle({
  // h: '100%',
  // w: '100%',
  bg: '$background300',

  borderRadius: '$lg',
  overflow: 'hidden',

  variants: {
    variant: {
      horizontal: {
        width: '100%',
      },
      vertical: {
        height: '100%',
      },
    },
  },
});
