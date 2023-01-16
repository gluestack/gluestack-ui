import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';
import { Cssify } from '@dank-style/cssify';
let DEBUG = false;

function getCSSIdAndRuleset(
  styleValueResolvedWithMeta: StyledValueResolvedWithMeta
  // path: Path
) {
  const toBeInjectedStyle: {
    style: any;
    condition?: any;
    colorMode?: any;
  } = { style: styleValueResolvedWithMeta.resolved };
  if (
    styleValueResolvedWithMeta.meta.queryCondition &&
    styleValueResolvedWithMeta.meta.colorMode
  ) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
    toBeInjectedStyle.colorMode = styleValueResolvedWithMeta.meta.colorMode;
  } else if (styleValueResolvedWithMeta.meta.queryCondition) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
  } else if (styleValueResolvedWithMeta.meta.colorMode) {
    toBeInjectedStyle.colorMode = styleValueResolvedWithMeta.meta.colorMode;
  }
  // console.log(toBeInjectedStyle, 'TO BE INJECTED');
  //@ts-ignore
  const cssObject = Cssify.create({ style: toBeInjectedStyle }, 'style');
  return cssObject;
}

export function updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    const cssData: any = getCSSIdAndRuleset(styleResolved);
    if (!DEBUG) {
      delete styleResolved.resolved;
      delete styleResolved.original;
    }
    // console.log(styleResolved, 'CSS DATA');
    styleResolved.meta.cssId = cssData.ids.style;
    styleResolved.meta.cssRuleset = cssData.rules.style;
  });
}
