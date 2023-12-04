import { createStyle } from '@gluestack-style/react';

export const ToastTitle = createStyle({
  fontWeight: '$medium',
  props: {
    size: 'md',
  },
  color: '$textLight900',
  _dark: {
    color: '$textDark50',
  },
});
