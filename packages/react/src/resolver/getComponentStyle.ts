import type { OrderedSXResolved } from '../types';

export function getComponentResolvedBaseStyle(
  orderedResolved: OrderedSXResolved
) {
  const componentOrderResolvedBaseStyle: OrderedSXResolved = [];
  const componentOrderResolvedBaseStateStyle: OrderedSXResolved = [];

  orderedResolved &&
    orderedResolved.forEach((item: any) => {
      if (
        !item.meta.path?.includes('descendants') &&
        !(
          item.meta.path?.includes('variants') ||
          item.meta.path?.includes('compoundVariants')
        )
      ) {
        if (item.meta.path?.includes('state')) {
          componentOrderResolvedBaseStateStyle.push(item);
        } else {
          componentOrderResolvedBaseStyle.push(item);
        }
      }
    });
  return [
    componentOrderResolvedBaseStyle,
    componentOrderResolvedBaseStateStyle,
  ];
}

export function getComponentResolvedVariantStyle(
  orderedResolved: OrderedSXResolved
) {
  const componentOrderResolvedVariantStyle: OrderedSXResolved = [];
  const componentOrderResolvedVariantStateStyle: OrderedSXResolved = [];

  orderedResolved &&
    orderedResolved.forEach((item: any) => {
      if (
        !item.meta.path?.includes('descendants') &&
        (item.meta.path?.includes('variants') ||
          item.meta.path?.includes('compoundVariants'))
      ) {
        if (item.meta.path?.includes('state')) {
          componentOrderResolvedVariantStateStyle.push(item);
        } else {
          componentOrderResolvedVariantStyle.push(item);
        }
      }
    });
  return [
    componentOrderResolvedVariantStyle,
    componentOrderResolvedVariantStateStyle,
  ];
}

export function getDescendantResolvedBaseStyle(
  orderedResolved: OrderedSXResolved
) {
  const descendantOrderResolvedBaseStyle: OrderedSXResolved = [];
  const descendantOrderResolvedBaseStateStyle: OrderedSXResolved = [];

  orderedResolved &&
    orderedResolved.forEach((item: any) => {
      if (
        item.meta.path?.includes('descendants') &&
        !(
          item.meta.path?.includes('variants') ||
          item.meta.path?.includes('compoundVariants')
        )
      ) {
        if (item.meta.path?.includes('state')) {
          descendantOrderResolvedBaseStateStyle.push(item);
        } else {
          descendantOrderResolvedBaseStyle.push(item);
        }
      }
    });
  return [
    descendantOrderResolvedBaseStyle,
    descendantOrderResolvedBaseStateStyle,
  ];
}

export function getDescendantResolvedVariantStyle(
  orderedResolved: OrderedSXResolved
) {
  const descendantOrderResolvedVariantStyle: OrderedSXResolved = [];
  const descendantOrderResolvedVariantStateStyle: OrderedSXResolved = [];

  orderedResolved &&
    orderedResolved.forEach((item: any) => {
      if (
        item.meta.path?.includes('descendants') &&
        (item.meta.path?.includes('variants') ||
          item.meta.path?.includes('compoundVariants'))
      ) {
        if (item.meta.path?.includes('state')) {
          descendantOrderResolvedVariantStateStyle.push(item);
        } else {
          descendantOrderResolvedVariantStyle.push(item);
        }
      }
    });
  return [
    descendantOrderResolvedVariantStyle,
    descendantOrderResolvedVariantStateStyle,
  ];
}
