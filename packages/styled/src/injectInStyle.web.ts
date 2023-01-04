import { inject } from '@gluestack/css-injector';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function injectInStyle(
  orderedSXResolved: OrderedSXResolved,
  _styleTagId: any = 'css-injected-boot-time',
  _globalStyleMap?: any
) {
  let toBeInjectedCssRules = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRules += styleResolved.meta.cssRuleset;
  });

  inject(`@media screen {${toBeInjectedCssRules}}`, _styleTagId);
}
