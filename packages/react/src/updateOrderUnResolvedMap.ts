import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
} from './resolver/getComponentStyle';
import { getStyleIds } from './resolver/getStyleIds';
import { styledResolvedToOrderedSXResolved } from './resolver/orderedResolved';
import { styledToStyledResolved } from './resolver/styledResolved';
import { GluestackStyleSheet, type StyleInjector } from './style-sheet';
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

  const componentBaseStyleIds = _GluestackStyleSheet.declare(
    componentOrderResolvedBaseStyle,
    declarationType + '-base',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );
  const descendantBaseStyleIds = _GluestackStyleSheet.declare(
    descendantOrderResolvedBaseStyle,
    declarationType + '-descendant-base',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );
  const componentVariantStyleIds = _GluestackStyleSheet.declare(
    componentOrderResolvedVariantStyle,
    declarationType + '-variant',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );
  const descendantVariantStyleIds = _GluestackStyleSheet.declare(
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

  const verbosedStyleIds = getStyleIds(orderedUnResolvedTheme, ExtendedConfig);

  return {
    styledIds: styleCSSIdsArr,
    verbosedStyleIds,
  };
}
