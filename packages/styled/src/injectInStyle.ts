import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function injectInStyle(
  orderedSXResolved: OrderedSXResolved,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  styleTagId: any = 'css-injected-boot-time',
  globalStyleMap: any
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    globalStyleMap.set(styleResolved.meta.cssId, styleResolved.resolved);
  });
}
