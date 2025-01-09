import { createStyle } from '@gluestack-style/react';

export const MenuSeparator = createStyle({
  bg: '$backgroundLight200',
  height: '$px',
  width: '$full',
  _dark: {
    bg: '$backgroundLight800',
  },
});
