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
import { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';
import { INTERNAL_updateCSSStyleInOrderedResolved as INTERNAL_updateCSSStyleInOrderedResolvedWeb } from './updateCSSStyleInOrderedResolved.web';

export function updateOrderUnResolvedMap(
  theme: any,
  componentHash: string,
  declarationType: string,
  ExtendedConfig: any,
  _GluestackStyleSheet: StyleInjector = GluestackStyleSheet,
  platform: string = ''
) {
  const prefixClassName = declarationType === 'inline' ? 'gs' : '';
  const shouldGuessDescendants = declarationType === 'inline' ? true : false;
  const unresolvedTheme = styledToStyledResolved(theme, [], {}, false);
  const orderedUnResolvedTheme =
    styledResolvedToOrderedSXResolved(unresolvedTheme);

  // platform is useful incase of Babel plugin
  if (platform === 'all') {
    INTERNAL_updateCSSStyleInOrderedResolvedWeb(
      orderedUnResolvedTheme,
      componentHash,
      true,
      prefixClassName,
      false
    );
  } else if (platform === 'web') {
    INTERNAL_updateCSSStyleInOrderedResolvedWeb(
      orderedUnResolvedTheme,
      componentHash,
      false,
      prefixClassName,
      false
    );
  } else {
    INTERNAL_updateCSSStyleInOrderedResolved(
      orderedUnResolvedTheme,
      componentHash,
      true,
      prefixClassName,
      false
    );
  }

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

  if (declarationType === 'global') {
  }
  const componentBaseStyleIds = _GluestackStyleSheet.declare(
    componentOrderResolvedBaseStyle,
    declarationType === 'global' ? declarationType : declarationType + '-base',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );
  const descendantBaseStyleIds = _GluestackStyleSheet.declare(
    descendantOrderResolvedBaseStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-descendant-base',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );
  const componentVariantStyleIds = _GluestackStyleSheet.declare(
    componentOrderResolvedVariantStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-variant',
    componentHash ? componentHash : 'css-injected-boot-time',
    ExtendedConfig
  );
  const descendantVariantStyleIds = _GluestackStyleSheet.declare(
    descendantOrderResolvedVariantStyle,
    declarationType === 'global'
      ? declarationType
      : declarationType + '-descendant-variant',
    componentHash ? componentHash : 'css-injected-boot-time-descendant',
    ExtendedConfig
  );

  const styleCSSIdsArr = [
    ...componentBaseStyleIds,
    ...descendantBaseStyleIds,
    ...componentVariantStyleIds,
    ...descendantVariantStyleIds,
  ];

  const verbosedStyleIds = getStyleIds(
    orderedUnResolvedTheme,
    ExtendedConfig,
    shouldGuessDescendants
  );

  return {
    styledIds: styleCSSIdsArr,
    verbosedStyleIds,
  };
}
