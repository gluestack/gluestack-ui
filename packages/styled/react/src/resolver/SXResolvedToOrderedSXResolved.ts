import type { OrderedSXResolved, VerbosedSxResolved } from '../types';
import { extractWidthValues } from '../utils';

export function SXResolvedToOrderedSXResolved(
  sxResolved: VerbosedSxResolved
): OrderedSXResolved {
  let orderedSXResolved: any = [];
  if (sxResolved?.styledValueResolvedWithMeta?.original) {
    orderedSXResolved = [sxResolved.styledValueResolvedWithMeta];
  }

  if (sxResolved?.platform) {
    Object.keys(sxResolved.platform).forEach((key) => {
      //@ts-ignore
      const platformSXResolved = sxResolved?.platform[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(platformSXResolved)
      );
    });
  }
  if (sxResolved?.colorMode) {
    Object.keys(sxResolved.colorMode).forEach((key) => {
      //@ts-ignore
      const colorModeSXResolved = sxResolved.colorMode[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(colorModeSXResolved)
      );
    });
  }
  if (sxResolved?.queriesResolved) {
    const queriesResolved: any = {};
    const breakpoints: any = [];
    // order and push based on config media query order
    sxResolved.queriesResolved.forEach((queryResolved: any) => {
      const queryCondition =
        queryResolved.resolved.value.styledValueResolvedWithMeta.meta
          .queryCondition;
      const currentBreakpoint: any = extractWidthValues(queryCondition);

      if (currentBreakpoint.length === 1) {
        breakpoints.push(currentBreakpoint[0]);
        if (!queriesResolved[currentBreakpoint])
          queriesResolved[currentBreakpoint] = [];

        queriesResolved[currentBreakpoint].push(
          ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
        );
      } else {
        orderedSXResolved.push(
          ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
        );
      }

      // orderedSXResolved.push(
      //   //@ts-ignore
      //   ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
      // );
    });

    breakpoints.sort((a: any, b: any) => a - b);

    breakpoints.forEach((currentBreakpoint: any) => {
      if (queriesResolved[currentBreakpoint])
        orderedSXResolved.push(...queriesResolved[currentBreakpoint]);
    });
  }

  if (sxResolved?.state) {
    Object.keys(sxResolved.state).forEach((key) => {
      //@ts-ignore
      const stateSXResolved = sxResolved.state[key];
      // stateSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.state + (STATE_PRECENDENCE[key] || 0) / 100;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(stateSXResolved));
      // orderedSXResolved.push(stateSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved?.descendants) {
    Object.keys(sxResolved.descendants).forEach((key) => {
      //@ts-ignore
      const descendantSXResolved = sxResolved.descendants[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(descendantSXResolved)
      );
    });
  }
  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}
