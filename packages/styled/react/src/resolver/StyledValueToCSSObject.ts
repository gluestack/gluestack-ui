import type { CSSObject, StyledValue } from '../types';
import { resolvedTokenization } from '../utils';

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
    Object.keys(CONFIG?.themes).forEach((themeName: any) => {
      if (themeName !== 'tokens') {
        const themeResolved = StyledValueToCSSObject(
          input,
          {
            ...CONFIG,
            tokens: CONFIG?.themes?.tokens?.[themeName],
          },
          ignoreKeys,
          true
        );

        Object.keys(themeResolved).forEach((key: any) =>
          themeResolved[key] === undefined ? delete themeResolved[key] : {}
        );

        themeResolved1[themeName] = themeResolved;
      }
    });
  }

  return themeResolved1;
}
