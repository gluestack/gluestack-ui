import type { CSSObject, StyledValue } from '../types';
import { resolvedTokenization } from '../utils';

export function StyledValueToCSSObject(
  input: StyledValue | undefined,
  CONFIG: any
): CSSObject {
  if (!input) {
    return {};
  }
  // return input;
  // if (componentHashKey === '1graqax') {
  // console.log(
  //   JSON.stringify(componentTheme),
  //   CONFIG.themes,
  //   'componentTheme.meta.queryCondition'
  // );

  // }
  return resolvedTokenization(input, CONFIG);
}
