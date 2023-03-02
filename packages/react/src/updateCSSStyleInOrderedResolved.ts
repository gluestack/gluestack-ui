import { stableHash } from './stableHash';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function INTERNAL_updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved,
  objectHash: string,
  _keepOriginal: boolean = false
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    styleResolved.meta.cssId = objectHash + '-' + stableHash(styleResolved);
  });
}
