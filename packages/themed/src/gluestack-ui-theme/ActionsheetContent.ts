import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  alignItems: 'center',
  borderTopLeftRadius: '$3xl',
  borderTopRightRadius: '$3xl',
  h: '$full',
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
  // @ts-ignore
  _web: {
    userSelect: 'none',
  },
  defaultProps: {
    hardShadow: '5',
  },
});
