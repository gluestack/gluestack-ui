import type { StyleInjector } from './style-sheet/index';
import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
} from './resolver/getComponentStyle';
import { styledResolvedToOrderedSXResolved } from './resolver/orderedResolved';
import { styledToStyledResolved } from './resolver/styledResolved';
import { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';

export function updateOrderUnResolvedMap(
  theme: any,
  componentHash: string,
  declarationType: string,
  ExtendedConfig: any,
  GluestackStyleSheet: StyleInjector
) {
  const unresolvedTheme = styledToStyledResolved(theme, [], {}, false);
  const orderedUnResolvedTheme =
    styledResolvedToOrderedSXResolved(unresolvedTheme);

  INTERNAL_updateCSSStyleInOrderedResolved(
    orderedUnResolvedTheme,
    componentHash,
    true,
    '',
    false
  );

  const componentOrderResolvedBaseStyle = getComponentResolvedBaseStyle(
    orderedUnResolvedTheme
  );
  const componentOrderResolvedVariantStyle = getComponentResolvedVariantStyle(
    orderedUnResolvedTheme
  );

  const descendantOrderResolvedBaseStyle = getDescendantResolvedBaseStyle(
    orderedUnResolvedTheme
  );
  const descendantOrderResolvedVariantStyle = getDescendantResolvedVariantStyle(
    orderedUnResolvedTheme
  );

  const componentBaseStyleIds = GluestackStyleSheet.declare(
    componentOrderResolvedBaseStyle,
    declarationType + '-base',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );
  const descendantBaseStyleIds = GluestackStyleSheet.declare(
    descendantOrderResolvedBaseStyle,
    declarationType + '-descendant-base',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );
  const componentVariantStyleIds = GluestackStyleSheet.declare(
    componentOrderResolvedVariantStyle,
    declarationType + '-variant',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );
  const descendantVariantStyleIds = GluestackStyleSheet.declare(
    descendantOrderResolvedVariantStyle,
    declarationType + '-descendant-variant',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );

  const styleCSSIdsArr = [
    ...componentBaseStyleIds,
    ...descendantBaseStyleIds,
    ...componentVariantStyleIds,
    ...descendantVariantStyleIds,
  ];

  return {
    orderedUnResolvedTheme,
    styleCSSIdsArr,
  };
}
