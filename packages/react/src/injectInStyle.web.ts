import { inject, flush } from '@dank-style/css-injector';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export { flush };
export function injectInStyle(
  _globalStyleMap: any,
  orderedSXResolved: OrderedSXResolved,
  type: string,
  styleTagId: string
) {
  let toBeInjectedCssRules = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRules += styleResolved.meta.cssRuleset;
  });

  if (toBeInjectedCssRules) {
    inject(`@media screen {${toBeInjectedCssRules}}`, type, styleTagId);

    // if (typeof window !== 'undefined') {
    //   const styleTag = document.getElementById(styleTagId);

    //   if (!styleTag) {
    //     inject(`@media screen {${toBeInjectedCssRules}}`, type, styleTagId);
    //   }
    // }
  }
}
