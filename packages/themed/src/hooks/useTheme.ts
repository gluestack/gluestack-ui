import { useStyled } from '@gluestack-style/react';

export const useTheme = () => {
  const theme = useStyled().config;
  if (Object.hasOwn(theme, 'components')) {
    delete theme.components;
  }
  if (Object.hasOwn(theme, 'globalStyle')) {
    delete theme.globalStyle;
  }
  return theme;
};
