import type { GlueStackConfig } from './types';
import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
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
  if (!config.components) {
    return config as any;
  }
  const newConfig = resolveComponentThemes(config);
  return newConfig as any;
};

const resolveComponentThemes = (config: any) => {
  const newConfig = { ...config };
  delete config.components;

  Object.keys(newConfig?.components ?? {}).forEach((componentName) => {
    const component = newConfig.components[componentName];
    if (component.theme) {
      component.theme = resolveTheme(
        component.theme,
        {
          ...config,
          propertyTokenMap,
        },
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
