import type { GlueStackConfig } from './types';
import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
import { deepMerge, resolveStringToken } from './utils';

import { stableHash } from './stableHash';
import { propertyTokenMap } from './propertyTokenMap';
import { updateOrderUnResolvedMap } from './updateOrderUnResolvedMap';
export const createConfig = <
  T extends GlueStackConfig<
    //@ts-ignore
    T['tokens'],
    T['aliases'],
    T['globalStyle']
  >
>(
  config:
    | T
    | GlueStackConfig<
        //@ts-ignore
        T['tokens'],
        T['aliases'],
        T['globalStyle']
      >
): T => {
  // @ts-ignore
  if (!config.components && !config.themes) {
    return config as any;
  }
  const newConfig = resolveComponentThemes(config);
  const newConfigWithThemesResolved = resolveThemes(newConfig);
  return newConfigWithThemesResolved as any;
};

const resolveThemes = (config: any) => {
  const newConfig = { ...config };
  Object.keys(newConfig?.themes ?? {}).forEach((themeName: any) => {
    let theme = newConfig.themes[themeName];
    Object.keys(theme).forEach((tokenScale: any) => {
      const tokenScaleValue = theme[tokenScale];
      Object.keys(tokenScaleValue).forEach((token: any) => {
        const tokenValue = resolveStringToken(
          tokenScaleValue[token],
          newConfig,
          tokenScale,
          ''
        );
        tokenScaleValue[token] = tokenValue;
      });
    });
    // const tempCONFIG = JSON.parse(JSON.stringify(newConfig));
    // delete tempCONFIG.themes;
    // deepMerge(tempCONFIG, { tokens: { ...theme } });
    // newConfig.themes[themeName] = tempCONFIG;
  });
  return newConfig;
};

const resolveComponentThemes = (config: any) => {
  const newConfig = { ...config };
  delete config.components;

  const configWithPropertyTokenMap = {
    ...config,
    propertyTokenMap,
  };
  Object.keys(newConfig?.components ?? {}).forEach((componentName: any) => {
    const component = newConfig.components[componentName];
    if (component.theme) {
      component.theme = resolveTheme(
        component.theme,
        configWithPropertyTokenMap,
        component?.componentConfig
      );
    }
  });

  return newConfig;
};

const resolveTheme = (
  componentTheme: {},
  _config: any,
  extendedConfig?: any
) => {
  const versboseComponentTheme = convertStyledToStyledVerbosed(componentTheme);
  const componentHash = stableHash({
    ...componentTheme,
  });

  const { styledIds, verbosedStyleIds } = updateOrderUnResolvedMap(
    versboseComponentTheme,
    componentHash,
    'extended',
    extendedConfig
  );
  return {
    extendedStyleIds: styledIds,
    extendedVerbosedStyleIds: verbosedStyleIds,
    theme: versboseComponentTheme,
  };
};
