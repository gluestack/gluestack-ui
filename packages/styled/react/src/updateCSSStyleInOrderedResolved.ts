import { stableHash } from './stableHash';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function INTERNAL_updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved,
  objectHash: string,
  _keepOriginal: boolean = false,
  _prefixClassName = '',
  _shouldResolve = true
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    styleResolved.meta.cssId =
      objectHash +
      '-' +
      stableHash({
        path: styleResolved?.meta?.path,
        data: styleResolved.original,
      });
  });
}
