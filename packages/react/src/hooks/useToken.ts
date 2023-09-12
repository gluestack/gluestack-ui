import { useStyled, ICustomConfig } from '@gluestack-style/react';

export const useToken = (tokenType: string, token: string) => {
  const theme: ICustomConfig = useStyled();

  // @ts-ignore
  const themeTokens = theme.config.tokens;
  token = token.replace('$', '');
  return themeTokens?.[`${tokenType}`]?.[`${token}`];
};
