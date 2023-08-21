import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
} from './resolver/getComponentStyle';
import { styledResolvedToOrderedSXResolved } from './resolver/orderedResolved';
import { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';

export const getComponentOrderResolve = (
  styledResolvedTheme: any,
  componentHash: any,
  _keepOriginal: boolean = false
) => {
  const orderedStyledResolvedTheme =
    styledResolvedToOrderedSXResolved(styledResolvedTheme);

  INTERNAL_updateCSSStyleInOrderedResolved(
    orderedStyledResolvedTheme,
    componentHash,
    _keepOriginal
  );

  const componentOrderResolvedBaseStyle = getComponentResolvedBaseStyle(
    orderedStyledResolvedTheme
  );
  const componentOrderResolvedVariantStyle = getComponentResolvedVariantStyle(
    orderedStyledResolvedTheme
  );

  const descendantOrderResolvedBaseStyle = getDescendantResolvedBaseStyle(
    orderedStyledResolvedTheme
  );
  const descendantOrderResolvedVariantStyle = getDescendantResolvedVariantStyle(
    orderedStyledResolvedTheme
  );

  return [
    componentOrderResolvedBaseStyle,
    componentOrderResolvedVariantStyle,
    descendantOrderResolvedBaseStyle,
    descendantOrderResolvedVariantStyle,
    orderedStyledResolvedTheme,
  ];
};
