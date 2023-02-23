import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function injectInStyle(
  _globalStyleMap: any,
  orderedSXResolved: OrderedSXResolved,
  _wrapperElementId?: string,
  _styleTagId: any = 'css-injected-boot-time'
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    _globalStyleMap.set(styleResolved.meta.cssId, styleResolved);
  });
}
export function injectCssVariablesGlobalStyle(_componentExtendedConfig: any) {}
export function injectGlobalCssStyle(_css: string, _styleTagId: string) {}
export function flush() {
  return [];
}
