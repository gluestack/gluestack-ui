import type { GlueStackConfig } from './types';
import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
import { resolveStringToken } from './utils';

import { stableHash } from './stableHash';
import { propertyTokenMap } from './propertyTokenMap';
import { updateOrderUnResolvedMap } from './updateOrderUnResolvedMap';
import { GluestackStyleSheet } from './style-sheet';
import { resolvePlatformTheme } from './styled';
import { Platform } from 'react-native';

/********************* PLUGINS *****************************/

// var globalPluginStore: never[] = [];
// function setGlobalPluginStore(plugins: any) {
//   if (plugins) {
//     // @ts-ignore
//     globalPluginStore.push(...plugins);
//   }
//   return getGlobalPluginStore();
// }
// function getGlobalPluginStore() {
//   return globalPluginStore;
// }

// export function getInstalledPlugins() {
//   return getGlobalPluginStore();
// }

/********************* CREATE COMPONENTS *****************************/

var globalComponentsStore: any = {};

// function setGlobalComponentsStore(components: any) {
//   if (components) {
//     // @ts-ignore
//     globalComponentsStore = {
//       ...globalComponentsStore,
//       ...components,
//     };
//   }
//   return getGlobalComponentsStore();
// }

function getGlobalComponentsStore() {
  return globalComponentsStore;
}

export function getInstalledComponents() {
  return getGlobalComponentsStore();
}

export const createComponents = <T>(components: T): T => {
  return components;
};

export const createConfig = <
  T extends GlueStackConfig<
    //@ts-ignore
    T['tokens'],
    T['aliases'],
    T['globalStyle'],
    T['plugins']
  >
>(
  config:
    | T
    | GlueStackConfig<
        //@ts-ignore
        T['tokens'],
        T['aliases'],
        T['globalStyle'],
        T['plugins']
      >
): T => {
  if (config.plugins) {
    // config.plugins = setGlobalPluginStore(config.plugins);
  }
  // delete config.plugins;

  if (!config.themes) {
    return config as any;
  }
  // if (config.components) {
  //   newConfig = resolveComponentThemes(config);
  // }

  if (config.themes) {
    const newConfigWithThemesResolved = resolveThemes(config);
    return newConfigWithThemesResolved as any;
  }
  return config as any;
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

export const resolveComponentTheme = (config: any, componentTheme: any) => {
  const configWithPropertyTokenMap = config;

  let resolvedTheme = componentTheme;
  const component = componentTheme;

  if (
    Object.keys(component?.BUILD_TIME_PARAMS ?? {}).length === 0 &&
    component.theme
  ) {
    resolvedTheme = resolveTheme(
      component.theme,
      configWithPropertyTokenMap,
      component?.componentConfig
    );
  } else {
    GluestackStyleSheet.update(component.BUILD_TIME_PARAMS?.orderedResolved);
    resolvedTheme = component;
  }

  return resolvedTheme;
};

export const resolveComponentThemes = (config: any, components: any) => {
  let newComponents: any = {};
  const configWithPropertyTokenMap = {
    ...config,
    propertyTokenMap,
  };

  Object.keys(components ?? {}).forEach((componentName: any) => {
    const component = components[componentName];

    if (
      Object.keys(component?.BUILD_TIME_PARAMS ?? {}).length === 0 &&
      component.theme
    ) {
      newComponents[componentName] = resolveTheme(
        component.theme,
        configWithPropertyTokenMap,
        component?.componentConfig
      );
    } else {
      GluestackStyleSheet.update(component.BUILD_TIME_PARAMS?.orderedResolved);
      newComponents[componentName] = component;
    }
  });

  return newComponents;
};

export const resolveTheme = (
  componentTheme: {},
  _config: any,
  extendedConfig?: any
) => {
  const versboseComponentTheme = convertStyledToStyledVerbosed(componentTheme);

  resolvePlatformTheme(versboseComponentTheme, Platform.OS);

  const componentHash = stableHash({
    ...versboseComponentTheme,
  });

  const { styledIds, verbosedStyleIds } = updateOrderUnResolvedMap(
    versboseComponentTheme,
    componentHash,
    'extended',
    extendedConfig
  );

  return {
    styledIds,
    verbosedStyleIds,
    theme: versboseComponentTheme,
  };
};
