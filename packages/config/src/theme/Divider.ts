import { createStyle } from '@gluestack-style/react';

export const Divider = createStyle({
  bg: '$backgroundLight200',
  _dark: {
    bg: '$backgroundLight800',
  },
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
