import type { GlueStackConfig } from './types';
import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
import { styledToStyledResolved } from './resolver/styledResolved';
import { stableHash } from './stableHash';
import { propertyTokenMap } from './propertyTokenMap';
import { ExtendedStyleSheet } from './style-sheet';
import { getComponentOrderResolve } from './getComponentOrderResolve';
import { getStyleIds } from './resolver/getStyleIds';
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
  propertyTokenMap;

  Object.keys(newConfig.components).forEach((componentName) => {
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
  config: any,
  extendedConfig?: any
) => {
  const versboseComponentTheme = convertStyledToStyledVerbosed(componentTheme);
  const componentHash = stableHash({
    ...componentTheme,
  });
  const styledResolvedTheme = styledToStyledResolved(
    versboseComponentTheme,
    [],
    {
      ...config,
      propertyTokenMap: { ...propertyTokenMap, ...config?.propertyTokenMap },
    }
  );
  const [
    componentOrderResolvedBaseStyle,
    componentOrderResolvedVariantStyle,
    descendantOrderResolvedBaseStyle,
    descendantOrderResolvedVariantStyle,
    _orderedResolved,
  ] = getComponentOrderResolve(styledResolvedTheme, componentHash, true);

  const extendedThemeBaseIDs = ExtendedStyleSheet.declare(
    componentOrderResolvedBaseStyle,
    'extended-base',
    componentHash ? componentHash : 'css-injected-extended-time',
    extendedConfig ?? {}
  );
  const extendedThemeDescendantBaseIDs = ExtendedStyleSheet.declare(
    descendantOrderResolvedBaseStyle,
    'extended-descendant-base',
    componentHash ? componentHash : 'css-injected-extended-time-descendant',
    extendedConfig ?? {}
  );
  const extendedThemeVariantIDs = ExtendedStyleSheet.declare(
    componentOrderResolvedVariantStyle,
    'extended-variant',
    componentHash ? componentHash : 'css-injected-extended-time',
    extendedConfig ?? {}
  );
  const extendedThemeDescendantVariantIDs = ExtendedStyleSheet.declare(
    descendantOrderResolvedVariantStyle,
    'extended-descendant-variant',
    componentHash ? componentHash : 'css-injected-extended-time-descendant',
    extendedConfig ?? {}
  );

  const mergedStyleIds = [
    ...extendedThemeBaseIDs,
    ...extendedThemeDescendantBaseIDs,
    ...extendedThemeVariantIDs,
    ...extendedThemeDescendantVariantIDs,
  ];

  const toBeInjected = ExtendedStyleSheet.resolve(mergedStyleIds, config, {});

  const styleIds = getStyleIds(_orderedResolved, extendedConfig ?? {});

  return { toBeInjected, styleIds, theme: versboseComponentTheme };
};
