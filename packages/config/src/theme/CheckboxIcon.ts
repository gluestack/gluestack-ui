import { createStyle } from '@gluestack-style/react';

export const CheckboxIcon = createStyle({
  ':checked': {
    color: '$background0',
  },

  ':disabled': {
    opacity: 0.4,
  },
});
