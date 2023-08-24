import type { OrderedSXResolved, StyledResolved } from '../types';
import { SXResolvedToOrderedSXResolved } from './SXResolvedToOrderedSXResolved';

export function styledResolvedToOrderedSXResolved(
  styledResolved: StyledResolved
): OrderedSXResolved {
  const orderedSXResolved: OrderedSXResolved = [
    //@ts-ignore
    ...SXResolvedToOrderedSXResolved(styledResolved?.baseStyle),
  ];

  if (styledResolved.variants) {
    Object.keys(styledResolved.variants).forEach((key) => {
      //@ts-ignore
      const variantSXResolved = styledResolved?.variants[key];
      // variantSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.variants;
      Object.keys(variantSXResolved).forEach((variantKey) => {
        // @ts-ignore
        const variantValueSXResolved = variantSXResolved[variantKey];

        orderedSXResolved.push(
          ...SXResolvedToOrderedSXResolved(variantValueSXResolved)
        );
      });
    });
  }

  if (styledResolved.compoundVariants) {
    styledResolved.compoundVariants.forEach((compoundVariant: any) => {
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(compoundVariant));
    });
  }

  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}
