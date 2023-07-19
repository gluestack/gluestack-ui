import { injectInStyle } from '../injectInStyle';
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

export function injectComponentAndDescendantStyles(
  orderedResolved: OrderedSXResolved,
  styleTagId?: string,
  globalStyleMap?: any,
  type: 'boot' | 'inline' = 'boot'
) {
  // const componentOrderResolved = getComponentResolved(orderedResolved);
  // const descendantOrderResolved = getDescendantResolved(orderedResolved);

  const componentOrderResolvedBaseStyle =
    getComponentResolvedBaseStyle(orderedResolved);
  const componentOrderResolvedVariantStyle =
    getComponentResolvedVariantStyle(orderedResolved);

  const descendantOrderResolvedBaseStyle =
    getDescendantResolvedBaseStyle(orderedResolved);
  const descendantOrderResolvedVariantStyle =
    getDescendantResolvedVariantStyle(orderedResolved);

  injectInStyle(
    globalStyleMap,
    componentOrderResolvedBaseStyle,
    type + '-base',
    styleTagId ? styleTagId : 'css-injected-boot-time'
  );

  injectInStyle(
    globalStyleMap,
    descendantOrderResolvedBaseStyle,
    type + '-descendant-base',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant'
  );

  injectInStyle(
    globalStyleMap,
    componentOrderResolvedVariantStyle,
    type + '-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time'
  );

  injectInStyle(
    globalStyleMap,
    descendantOrderResolvedVariantStyle,
    type + '-descendant-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant'
  );
}
