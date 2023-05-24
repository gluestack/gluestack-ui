import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';

export const createGlobalStyles = (globalStyle: object) => {
  const verboseGlobalStyle = convertStyledToStyledVerbosed(globalStyle);

  return verboseGlobalStyle;
};
