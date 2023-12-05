import { createStyle } from '@gluestack-style/react';

export const ActionsheetContent = createStyle({
  alignItems: 'center',
  borderTopLeftRadius: '$3xl',
  borderTopRightRadius: '$3xl',
  h: '$full',
  p: '$2',
  bg: '$backgroundLight0',
  _sectionHeaderBackground: {
    bg: '$backgroundLight0',
  },
  _dark: {
    bg: '$backgroundDark900',
    _sectionHeaderBackground: {
      bg: '$backgroundDark900',
    },
  },
  userSelect: 'none',
  defaultProps: {
    hardShadow: '5',
  },
  _web: {
    pointerEvents: 'auto',
  },
});
