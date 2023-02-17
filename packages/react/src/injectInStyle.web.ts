import { inject, flush } from '@dank-style/css-injector';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export { flush };
export function injectInStyle(
  _globalStyleMap: any,
  orderedSXResolved: OrderedSXResolved,
  wrapperElementId: string,
  styleTagId: string
) {
  let toBeInjectedCssRules = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRules += styleResolved.meta.cssRuleset;
  });

  if (toBeInjectedCssRules) {
    if (typeof window !== 'undefined') {
      const styleTag = document.getElementById(styleTagId);

      if (!styleTag) {
        inject(
          `@media screen {${toBeInjectedCssRules}}`,
          wrapperElementId,
          styleTagId
        );
      }
    }
  }
}
