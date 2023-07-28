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

  GluestackStyleSheet.update(
    componentOrderResolvedBaseStyle,
    type + '-base',
    styleTagId ? styleTagId : 'css-injected-boot-time'
  );
  GluestackStyleSheet.update(
    descendantOrderResolvedBaseStyle,
    type + '-descendant-base',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant'
  );
  GluestackStyleSheet.update(
    componentOrderResolvedVariantStyle,
    type + '-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time'
  );
  GluestackStyleSheet.update(
    descendantOrderResolvedVariantStyle,
    type + '-descendant-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant'
  );

  GluestackStyleSheet.injectInStyle();
}
