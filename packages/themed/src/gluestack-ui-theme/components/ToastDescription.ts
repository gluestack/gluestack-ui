import { createStyle } from '@gluestack-style/react';

export const ToastDescription = createStyle({
  color: '$textLight700',
  _dark: {
    color: '$textDark200',
  },
  props: {
    size: 'sm',
  },
});
