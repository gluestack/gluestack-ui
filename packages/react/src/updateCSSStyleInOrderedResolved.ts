import { stableHash } from './stableHash';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function INTERNAL_updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved,
  objectHash: string
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    styleResolved.meta.cssId = objectHash + '-' + stableHash('style');
  });
}
