import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
import { stableHash } from './stableHash';
import { resolvePlatformTheme } from './styled';
import { updateOrderUnResolvedMap } from './updateOrderUnResolvedMap';

export const createGlobalStyles = (globalStyle: object, Platform: any) => {
  const versboseComponentTheme = convertStyledToStyledVerbosed(globalStyle);
  resolvePlatformTheme(versboseComponentTheme, Platform.OS);
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
