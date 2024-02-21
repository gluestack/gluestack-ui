import { createStyle } from '@gluestack-style/react';

export const ActionsheetContent = createStyle({
  alignItems: 'center',
  borderTopLeftRadius: '$3xl',
  borderTopRightRadius: '$3xl',
  h: '$full',
  p: '$2',
  bg: '$background0',

  _sectionHeaderBackground: {
    bg: '$background0',
  },

  defaultProps: {
    hardShadow: '5',
  },

  _web: {
    userSelect: 'none',
    pointerEvents: 'auto',
  },
});
