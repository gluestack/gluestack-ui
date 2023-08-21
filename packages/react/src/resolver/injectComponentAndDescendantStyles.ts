import { GluestackStyleSheet } from '../style-sheet';
import type { OrderedSXResolved } from '../types';
import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
} from './getComponentStyle';

export function injectComponentAndDescendantStyles(
  orderedResolved: OrderedSXResolved,
  styleTagId?: string,
  type: 'boot' | 'inline' = 'boot'
) {
  const componentOrderResolvedBaseStyle =
    getComponentResolvedBaseStyle(orderedResolved);
  const componentOrderResolvedVariantStyle =
    getComponentResolvedVariantStyle(orderedResolved);

  const descendantOrderResolvedBaseStyle =
    getDescendantResolvedBaseStyle(orderedResolved);
  const descendantOrderResolvedVariantStyle =
    getDescendantResolvedVariantStyle(orderedResolved);

  const componentOrderResolvedBaseStyleIds = GluestackStyleSheet.declare(
    componentOrderResolvedBaseStyle,
    type + '-base',
    styleTagId ? styleTagId : 'css-injected-boot-time',
    {}
  );
  const descendantOrderResolvedBaseStyleIds = GluestackStyleSheet.declare(
    descendantOrderResolvedBaseStyle,
    type + '-descendant-base',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant',
    {}
  );
  const componentOrderResolvedVariantStyleIds = GluestackStyleSheet.declare(
    componentOrderResolvedVariantStyle,
    type + '-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time',
    {}
  );
  const descendantOrderResolvedVariantStyleIds = GluestackStyleSheet.declare(
    descendantOrderResolvedVariantStyle,
    type + '-descendant-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant',
    {}
  );

  const styleCSSIdsArr = [
    ...componentOrderResolvedBaseStyleIds,
    ...descendantOrderResolvedBaseStyleIds,
    ...componentOrderResolvedVariantStyleIds,
    ...descendantOrderResolvedVariantStyleIds,
  ];
  GluestackStyleSheet.resolve(styleCSSIdsArr, {}, {}, false);

  GluestackStyleSheet.injectInStyle(styleCSSIdsArr);
}
