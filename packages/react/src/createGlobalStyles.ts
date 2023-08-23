import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
import { stableHash } from './stableHash';
import { updateOrderUnResolvedMap } from './updateOrderUnResolvedMap';

export const createGlobalStyles = (globalStyle: object) => {
  const versboseComponentTheme = convertStyledToStyledVerbosed(globalStyle);
  const componentHash = stableHash({
    ...globalStyle,
  });

  const { styledIds, verbosedStyleIds } = updateOrderUnResolvedMap(
    versboseComponentTheme,
    componentHash,
    'global',
    {}
  );
  return {
    globalStyleIds: styledIds,
    globalVerbosedStyleIds: verbosedStyleIds,
    globalTheme: versboseComponentTheme,
  };
};
