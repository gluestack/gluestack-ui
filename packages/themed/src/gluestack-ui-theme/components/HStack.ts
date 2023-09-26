import { createStyle } from '@gluestack-style/react';

export const HStack = createStyle({
  flexDirection: 'row',
  variants: {
    space: {
      'xs': {
        gap: `$1`,
      },
      'sm': {
        gap: `$2`,
      },
      'md': {
        gap: `$3`,
      },
      'lg': {
        gap: `$4`,
      },
      'xl': {
        gap: `$5`,
      },
      '2xl': {
        gap: `$6`,
      },
      '3xl': {
        gap: `$7`,
      },
      '4xl': {
        gap: `$8`,
      },
    },
    reversed: {
      true: {
        flexDirection: 'row-reverse',
      },
    },
  },
});
