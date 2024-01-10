import type { CSSObject, StyledValue } from '../types';
import { deepMerge, resolvedTokenization } from '../utils';
import { deepClone } from '../utils/cssify/utils/common';

export function StyledValueToCSSObject(
  input: StyledValue | undefined,
  CONFIG: any,
  ignoreKeys: Set<any> = new Set(),
  deleteIfTokenNotExist: boolean = false
): CSSObject {
  if (!input) {
    return {};
  }
  return resolvedTokenization(input, CONFIG, ignoreKeys, deleteIfTokenNotExist);
}
export function themeStyledValueToCSSObject(
  input: StyledValue | undefined,
  CONFIG: any,
  ignoreKeys: Set<any> = new Set()
) {
  let themeResolved1: any = {};
  if (CONFIG?.themes) {
    const tokens = deepClone(CONFIG.tokens);
    Object.keys(CONFIG?.themes).forEach((key: any) => {
      const themeTokens = CONFIG?.themes[key];
      Object.keys(themeTokens).forEach((tokenKey1: any) => {
        Object.keys(themeTokens[tokenKey1]).forEach((tokenKey: any) => {
          delete tokens[tokenKey1][tokenKey];
        });
      });
    });

    // debugger;

    Object.keys(CONFIG?.themes).forEach((key: any) => {
      const themeResolved = StyledValueToCSSObject(
        input,
        {
          ...CONFIG,
          tokens: deepMerge(deepClone(tokens), CONFIG.themes[key]),
        },
        ignoreKeys,
        true
      );

      Object.keys(themeResolved).forEach((key) =>
        themeResolved[key] === undefined ? delete themeResolved[key] : {}
      );

      themeResolved1[key] = themeResolved;
    });
  }

  return themeResolved1;
}
