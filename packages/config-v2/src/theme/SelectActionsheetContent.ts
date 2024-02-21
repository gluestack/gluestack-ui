import { createStyle } from '@gluestack-style/react';

export const SelectActionsheetContent = createStyle({
  alignItems: 'center',
  borderTopLeftRadius: '$3xl',
  borderTopRightRadius: '$3xl',
  maxHeight: '70%',
  p: '$2',
  bg: '$background0',

  _sectionHeaderBackground: {
    bg: '$background0',
  },

  pointerEvents: 'auto',

  _web: {
    userSelect: 'none',
  },

  defaultProps: {
    hardShadow: '5',
  },
});
