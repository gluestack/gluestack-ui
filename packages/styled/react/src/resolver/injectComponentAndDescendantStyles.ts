import { GluestackStyleSheet, StyleInjector } from '../style-sheet';
import type { OrderedSXResolved } from '../types';
import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
} from './getComponentStyle';
import { INTERNAL_updateCSSStyleInOrderedResolved } from '../updateCSSStyleInOrderedResolved';
import { orderWithCssSelectors } from '../utils/css-injector/utils/inject';

export function injectComponentAndDescendantStyles(
  orderedResolved: OrderedSXResolved,
  styleTagId: string,
  type: 'boot' | 'inline' = 'boot',
  _GluestackStyleSheet: StyleInjector = GluestackStyleSheet,
  platform: string = '',
  inlineStyleMap?: any,
  ignoreKeys: Set<any> = new Set(),
  CONFIG: any = {}
) {
  const INLINE_BASE = type + '-base';
  const INLINE_VARIANT = type + '-variant';
  const INLINE_DESCENDANT_BASE = type + '-descendant-base';
  const INLINE_DESCENDANT_VARIANT = type + '-descendant-variant';

  const [
    componentOrderResolvedBaseStyle,
    componentOrderResolvedBaseStateStyle,
  ] = getComponentResolvedBaseStyle(orderedResolved);
  const [
    componentOrderResolvedVariantStyle,
    componentOrderResolvedVariantStateStyle,
  ] = getComponentResolvedVariantStyle(orderedResolved);

  const [
    descendantOrderResolvedBaseStyle,
    descendantOrderResolvedBaseStateStyle,
  ] = getDescendantResolvedBaseStyle(orderedResolved);
  const [
    descendantOrderResolvedVariantStyle,
    descendantOrderResolvedVariantStateStyle,
  ] = getDescendantResolvedVariantStyle(orderedResolved);

  INTERNAL_updateCSSStyleInOrderedResolved(
    [
      ...componentOrderResolvedBaseStyle,
      ...componentOrderResolvedBaseStateStyle,
    ],
    styleTagId,
    true,
    orderWithCssSelectors[INLINE_BASE]
  );
  INTERNAL_updateCSSStyleInOrderedResolved(
    [
      ...componentOrderResolvedVariantStyle,
      ...componentOrderResolvedVariantStateStyle,
    ],
    styleTagId,
    true,
    orderWithCssSelectors[INLINE_VARIANT]
  );
  INTERNAL_updateCSSStyleInOrderedResolved(
    [
      ...descendantOrderResolvedBaseStyle,
      ...descendantOrderResolvedBaseStateStyle,
    ],
    styleTagId,
    true,
    orderWithCssSelectors[INLINE_DESCENDANT_BASE]
  );
  INTERNAL_updateCSSStyleInOrderedResolved(
    [
      ...descendantOrderResolvedVariantStyle,
      ...descendantOrderResolvedVariantStateStyle,
    ],
    styleTagId,
    true,
    orderWithCssSelectors[INLINE_DESCENDANT_VARIANT]
  );

  const componentOrderResolvedBaseStyleIds = GluestackStyleSheet.declare(
    [
      ...componentOrderResolvedBaseStyle,
      ...componentOrderResolvedBaseStateStyle,
    ],
    INLINE_BASE,
    styleTagId ? styleTagId : 'css-injected-boot-time',
    {}
  );
  const descendantOrderResolvedBaseStyleIds = GluestackStyleSheet.declare(
    [
      ...descendantOrderResolvedBaseStyle,
      ...descendantOrderResolvedBaseStateStyle,
    ],
    INLINE_DESCENDANT_BASE,
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant',
    {}
  );

  const componentOrderResolvedVariantStyleIds = GluestackStyleSheet.declare(
    [
      ...componentOrderResolvedVariantStyle,
      ...componentOrderResolvedVariantStateStyle,
    ],
    INLINE_VARIANT,
    styleTagId ? styleTagId : 'css-injected-boot-time',
    {}
  );
  const descendantOrderResolvedVariantStyleIds = GluestackStyleSheet.declare(
    [
      ...descendantOrderResolvedVariantStyle,
      ...descendantOrderResolvedVariantStateStyle,
    ],
    INLINE_DESCENDANT_VARIANT,
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant',
    {}
  );

  const styleCSSIdsArr = [
    ...componentOrderResolvedBaseStyleIds,
    ...descendantOrderResolvedBaseStyleIds,
    ...componentOrderResolvedVariantStyleIds,
    ...descendantOrderResolvedVariantStyleIds,
  ];

  const toBeInjected = GluestackStyleSheet.resolve(
    styleCSSIdsArr,
    CONFIG,
    {},
    false,
    type,
    ignoreKeys
  );

  if (platform === 'web') {
    GluestackStyleSheet.inject(toBeInjected, inlineStyleMap);
  }

  return styleCSSIdsArr;
}
