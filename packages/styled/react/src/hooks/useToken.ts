import { useStyled } from '../StyledProvider';
import type { ICustomConfig } from '../types';

/**
 *
 * @param tokenScale Type of the token ex: colors, spacing, fontSizes, etc
 * @param token Token name ex: red500, 1, sm, etc
 * @returns
 */
export const useToken = (tokenScale: string, token: string) => {
  const theme: ICustomConfig = useStyled();
  // @ts-ignore
  const themeTokens = theme.config.tokens;
  return themeTokens?.[`${tokenScale}`]?.[`${token}`] ?? token;
};
