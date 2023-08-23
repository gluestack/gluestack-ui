import type { OrderedSXResolved, VerbosedSxResolved } from '../types';

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
    sxResolved.queriesResolved.forEach((queryResolved: any) => {
      orderedSXResolved.push(
        //@ts-ignore

        ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
      );
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
