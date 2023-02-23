import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';
import { Cssify } from '@dank-style/cssify';
import { stableHash } from './stableHash';
let DEBUG = false;

function getCSSIdAndRuleset(
  styleValueResolvedWithMeta: StyledValueResolvedWithMeta,
  objectHash: string
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
  const cssObject = Cssify.create(
    { style: toBeInjectedStyle },

    // 'helloworld'
    objectHash + '-' + stableHash(toBeInjectedStyle)
  );

  // var hr = stableHash({ hello: 'helloworld' });

  // console.log(
  //   toBeInjectedStyle,
  //   stableHash(toBeInjectedStyle),
  //   'consistant hash @@@@'
  // );
  return cssObject;
}

export function updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved,
  objectHash: string
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    const cssData: any = getCSSIdAndRuleset(styleResolved, objectHash);

    if (!DEBUG) {
      delete styleResolved.resolved;
      delete styleResolved.original;
    }
    // console.log(styleResolved, 'CSS DATA');
    styleResolved.meta.cssId = cssData.ids.style;
    styleResolved.meta.cssRuleset = cssData.rules.style;
  });
}
