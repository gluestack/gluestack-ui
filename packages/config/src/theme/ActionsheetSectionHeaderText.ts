import { createStyle } from '@gluestack-style/react';

export const ActionsheetSectionHeaderText = createStyle({
  color: '$textLight500',
  props: { size: 'xs' },
  textTransform: 'uppercase',
  p: '$3',
  _dark: {
    color: '$textDark400',
  },
});
