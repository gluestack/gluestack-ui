import { createStyle } from '@gluestack-style/react';

export const Divider = createStyle({
  bg: '$background200',

  variants: {
    orientation: {
      vertical: {
        width: '$px',
        height: '$full',
      },
      horizontal: {
        height: '$px',
        width: '$full',
      },
    },
  },

  defaultProps: {
    orientation: 'horizontal',
  },
});
