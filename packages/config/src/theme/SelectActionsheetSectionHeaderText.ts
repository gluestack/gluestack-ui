import { createStyle } from '@gluestack-style/react';

export const SelectActionsheetSectionHeaderText = createStyle({
  color: '$textLight500',
  fontSize: '$sm',
  fontFamily: '$body',
  fontWeight: '$bold',
  lineHeight: '$xs',
  textTransform: 'uppercase',
  p: '$3',
  _dark: {
    color: '$textDark400',
  },
});
