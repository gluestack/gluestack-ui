import type { CSSObject, StyledValue } from '../types';
import { resolvedTokenization } from '../utils';

export function StyledValueToCSSObject(
  input: StyledValue | undefined,
  CONFIG: any
): CSSObject {
  if (!input) {
    return {};
  }
  return resolvedTokenization(input, CONFIG);
}
