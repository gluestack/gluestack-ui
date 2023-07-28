import type { OrderedSXResolved } from '../types';

export function getComponentResolvedBaseStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      !item.meta.path?.includes('descendants') &&
      !(
        item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants')
      )
  );
}

export function getComponentResolvedVariantStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      !item.meta.path?.includes('descendants') &&
      (item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants'))
  );
}

export function getDescendantResolvedBaseStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      item.meta.path?.includes('descendants') &&
      !(
        item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants')
      )
  );
}

export function getDescendantResolvedVariantStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      item.meta.path?.includes('descendants') &&
      (item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants'))
  );
}
