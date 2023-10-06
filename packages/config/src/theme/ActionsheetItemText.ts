import { createStyle } from '@gluestack-style/react';

export const ActionsheetItemText = createStyle({
  mx: '$2',
  props: {
    size: 'md',
  },
  color: '$textLight800',
  _dark: {
    color: '$textDark100',
  },
});
