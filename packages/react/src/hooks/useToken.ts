import { useStyled, ICustomConfig } from '@gluestack-style/react';

/**
 *
 * @param tokenType Type of the token ex: colors, spacing, fontSizes, etc
 * @param token Token name ex: red500, 1, sm, etc
 * @returns
 */
export const useToken = (tokenType: string, token: string) => {
  const theme: ICustomConfig = useStyled();
  // @ts-ignore
  const themeTokens = theme.config.tokens;
  return themeTokens?.[`${tokenType}`]?.[`${token}`];
};
