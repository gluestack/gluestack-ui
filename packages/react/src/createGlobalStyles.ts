import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
import {
  styledResolvedToOrderedSXResolved,
  styledToStyledResolved,
} from './resolver';
import { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';
import { stableHash } from './stableHash';

export const createGlobalStyles = (globalStyle: object) => {
  const verboseGlobalStyle = convertStyledToStyledVerbosed(globalStyle);

  return verboseGlobalStyle;
};
