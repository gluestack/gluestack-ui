import { useStyled } from '../StyledProvider';
import { useTheme } from '../Theme';
import type { GSConfig, Tokens } from '../types';

type GSTokens<T> = T extends keyof GSConfig['tokens']
  ? keyof GSConfig['tokens'][T]
  : string;

/**
 *
 * @param tokenScale Token scale ex: colors, space, fontSizes, etc
 * @param token Token name ex: primary200, red500, 1, 2, sm, etc
 * @returns
 */
export const useToken = <T extends keyof Tokens>(
  tokenScale: T,
  token: GSTokens<T>
) => {
  const theme = useStyled();
  const { themes: activeThemes = [] } = useTheme();

  for (const key in activeThemes?.reverse()) {
    const currentTheme = activeThemes[key];
    if (theme?.config?.themes?.hasOwnProperty(currentTheme)) {
      const currentThemeTokens = theme?.config?.themes[currentTheme];

      if (currentThemeTokens?.[tokenScale]?.[token]) {
        return currentThemeTokens?.[tokenScale]?.[token];
      }
    }
  }

  const themeTokens = theme.config.tokens;
  return themeTokens?.[tokenScale]?.[token] ?? token;
};
