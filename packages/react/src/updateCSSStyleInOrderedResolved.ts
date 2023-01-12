import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';
import { hash } from './utils';

export function updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    styleResolved.meta.cssId = hash('style');
  });
}
