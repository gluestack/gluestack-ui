import { useStyled } from '../StyledProvider';

export const useConfig = () => {
  const theme = useStyled().config;
  if (Object.hasOwn(theme, 'components')) {
    delete theme.components;
  }
  if (Object.hasOwn(theme, 'globalStyle')) {
    delete theme.globalStyle;
  }
  return theme;
};
