import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';
import { Cssify } from './utils/cssify';
import { stableHash } from './stableHash';

export function getCSSIdAndRuleset(
  styleValueResolvedWithMeta: StyledValueResolvedWithMeta,
  objectHash: string,
  prefixClassName: string = '',
  activeThemeData?: any
  // path: Path
) {
  const hasState = styleValueResolvedWithMeta.meta.path?.includes('state');
  const toBeInjectedStyle: {
    style: any;
    condition?: any;
    theme?: any;
  } = { style: styleValueResolvedWithMeta.resolved };
  if (
    styleValueResolvedWithMeta.meta.queryCondition &&
    styleValueResolvedWithMeta.meta.theme
  ) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
    toBeInjectedStyle.theme = styleValueResolvedWithMeta.meta.theme;
  } else if (styleValueResolvedWithMeta.meta.queryCondition) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
  } else if (styleValueResolvedWithMeta.meta.theme) {
    toBeInjectedStyle.theme = styleValueResolvedWithMeta.meta.theme;
  }
  // // @ts-ignore
  if (styleValueResolvedWithMeta.meta.themeCondition) {
    // @ts-ignore
    toBeInjectedStyle.themeCondition =
      // @ts-ignore
      styleValueResolvedWithMeta.meta.themeCondition;
  }
  if (activeThemeData) {
    // @ts-ignore
    toBeInjectedStyle.activeThemeData = activeThemeData;
  }

  //@ts-ignore
  const cssObject = Cssify.create(
    { style: toBeInjectedStyle },
    // 'helloworld'
    objectHash +
      '-' +
      stableHash({
        path: styleValueResolvedWithMeta?.meta?.path,
        data: styleValueResolvedWithMeta.original,
      }),
    prefixClassName,
    hasState
  );

  // var hr = stableHash({ hello: 'helloworld' });

  // console.log(
  //   toBeInjectedStyle,
  //   stableHash(toBeInjectedStyle),
  //   'consistant hash @@@@'
  // );
  return cssObject;
}

export function INTERNAL_updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved,
  objectHash: string,
  keepOriginal: boolean = false,
  prefixClassName = '',
  shouldResolve = true,
  themeData?: any
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    if (shouldResolve) {
      const cssData: any = getCSSIdAndRuleset(
        styleResolved,
        objectHash,
        prefixClassName,
        themeData
      );

      if (!keepOriginal) {
        delete styleResolved.resolved;
        delete styleResolved.original;
      }
      // console.log(styleResolved, 'CSS DATA');

      styleResolved.meta.cssId = cssData.ids.style;
      styleResolved.meta.cssRuleset = cssData.rules.style;
    } else {
      styleResolved.meta.cssId =
        objectHash +
        '-' +
        stableHash({
          path: styleResolved?.meta?.path,
          data: styleResolved.original,
        });
    }
  });
}
