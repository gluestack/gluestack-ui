import { inject } from '@gluestack/css-injector';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export function injectInStyle(
  orderedSXResolved: OrderedSXResolved,
  styleTagId: any = 'css-injected-boot-time',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  globalStyleMap?: any
) {
  let toBeInjectedCssRules = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRules += styleResolved.meta.cssRuleset;
  });

  inject(`@media screen {${toBeInjectedCssRules}}`, styleTagId);
}
