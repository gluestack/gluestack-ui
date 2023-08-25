import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
} from './resolver/getComponentStyle';
import { getStyleIds } from './resolver/getStyleIds';
import { styledResolvedToOrderedSXResolved } from './resolver/orderedResolved';
import { styledToStyledResolved } from './resolver/styledResolved';
import { GluestackStyleSheet } from './style-sheet';
import type { StyleInjector } from './style-sheet';
import { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved.web';

export function updateOrderUnResolvedMap(
  theme: any,
  componentHash: string,
  declarationType: string,
  ExtendedConfig: any,
  _GluestackStyleSheet: StyleInjector = GluestackStyleSheet
) {
  const unresolvedTheme = styledToStyledResolved(theme, [], {}, false);
  const orderedUnResolvedTheme =
    styledResolvedToOrderedSXResolved(unresolvedTheme);

  INTERNAL_updateCSSStyleInOrderedResolved(
    orderedUnResolvedTheme,
    componentHash,
    true
  );

  // base style
  const [
    componentOrderResolvedBaseStyle,
    componentOrderResolvedBaseStateStyle,
  ] = getComponentResolvedBaseStyle(orderedUnResolvedTheme);

  const componentBaseStyleIds = _GluestackStyleSheet.declare(
    componentOrderResolvedBaseStyle,
    declarationType === 'global' ? declarationType : declarationType + '-base',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );

  const componentBaseStyleStateIds = _GluestackStyleSheet.declare(
    componentOrderResolvedBaseStateStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-base-state',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );

  // descendant base style

  const [
    descendantOrderResolvedBaseStyle,
    descendantOrderResolvedBaseStateStyle,
  ] = getDescendantResolvedBaseStyle(orderedUnResolvedTheme);
  const descendantBaseStyleIds = _GluestackStyleSheet.declare(
    descendantOrderResolvedBaseStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-descendant-base',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );
  const descendantBaseStateStyleIds = _GluestackStyleSheet.declare(
    descendantOrderResolvedBaseStateStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-descendant-base-state',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );

  // variant style
  const [
    componentOrderResolvedVariantStyle,
    componentOrderResolvedVariantStateStyle,
  ] = getComponentResolvedVariantStyle(orderedUnResolvedTheme);

  const componentVariantStyleIds = _GluestackStyleSheet.declare(
    componentOrderResolvedVariantStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-variant',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );
  const componentVariantStateStyleIds = _GluestackStyleSheet.declare(
    componentOrderResolvedVariantStateStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-variant-state',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );

  // descendant variant style
  const [
    descendantOrderResolvedVariantStyle,
    descendantOrderResolvedVariantStateStyle,
  ] = getDescendantResolvedVariantStyle(orderedUnResolvedTheme);

  const descendantVariantStyleIds = _GluestackStyleSheet.declare(
    descendantOrderResolvedVariantStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-descendant-variant',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );
  const descendantVariantStateStyleIds = _GluestackStyleSheet.declare(
    descendantOrderResolvedVariantStateStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-descendant-variant-state',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );

  const styleCSSIdsArr = [
    ...componentBaseStyleIds,
    ...componentBaseStyleStateIds,
    ...descendantBaseStyleIds,
    ...descendantBaseStateStyleIds,
    ...componentVariantStyleIds,
    ...componentVariantStateStyleIds,
    ...descendantVariantStyleIds,
    ...descendantVariantStateStyleIds,
  ];

  const verbosedStyleIds = getStyleIds(orderedUnResolvedTheme, ExtendedConfig);

  return {
    styledIds: styleCSSIdsArr,
    verbosedStyleIds,
  };
}
