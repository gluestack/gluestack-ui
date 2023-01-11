import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function injectInStyle(
  orderedSXResolved: OrderedSXResolved,
  _styleTagId: any = 'css-injected-boot-time',
  _globalStyleMap: any
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    _globalStyleMap.set(styleResolved.meta.cssId, styleResolved);
  });
}
export function flush() {
  return [];
}
