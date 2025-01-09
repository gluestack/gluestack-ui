import { createStyle } from '@gluestack-style/react';

export const SelectActionsheetContent = createStyle({
  alignItems: 'center',
  borderTopLeftRadius: '$3xl',
  borderTopRightRadius: '$3xl',
  maxHeight: '70%',
  p: '$2',
  bg: '$backgroundLight0',
  _sectionHeaderBackground: {
    bg: '$backgroundLight0',
  },
  // @ts-ignore
  _dark: {
    bg: '$backgroundDark900',
    _sectionHeaderBackground: {
      bg: '$backgroundDark900',
    },
  },
  pointerEvents: 'auto',
  _web: {
    userSelect: 'none',
  },
  defaultProps: {
    hardShadow: '5',
  },
});
