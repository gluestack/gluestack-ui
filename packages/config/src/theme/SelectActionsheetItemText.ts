import { createStyle } from '@gluestack-style/react';

export const SelectActionsheetItemText = createStyle({
  mx: '$2',
  fontSize: '$md',
  fontFamily: '$body',
  fontWeight: '$normal',
  lineHeight: '$md',
  color: '$textLight700',
  _dark: {
    color: '$textDark200',
  },
});
