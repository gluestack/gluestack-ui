import { createStyle } from '@gluestack-style/react';

export const CheckboxIcon = createStyle({
  ':checked': {
    color: '$backgroundLight0',
  },
  ':disabled': {
    opacity: 0.4,
  },
  '_dark': {
    ':checked': {
      color: '$backgroundDark0',
    },
    ':disabled': {
      opacity: 0.4,
    },
  },
});
