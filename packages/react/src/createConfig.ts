import type { GlueStackConfig } from './types';
import { convertStyledToStyledVerbosed } from './convertSxToSxVerbosed';
import { styledToStyledResolved } from './resolver/styledResolved';
import { stableHash } from './stableHash';
import { propertyTokenMap } from './propertyTokenMap';
import { ExtendedStyleSheet } from './style-sheet';
import { getComponentOrderResolve } from './getComponentOrderResolve';
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
      component.theme = resolveTheme(component.theme, {
        ...config,
        propertyTokenMap,
      });
    }
  });

  return newConfig;
};

const resolveTheme = (componentTheme: {}, config: any) => {
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
    config
  );
  const extendedThemeDescendantBaseIDs = ExtendedStyleSheet.declare(
    descendantOrderResolvedBaseStyle,
    'extended-descendant-base',
    componentHash ? componentHash : 'css-injected-extended-time-descendant',
    config
  );
  const extendedThemeVariantIDs = ExtendedStyleSheet.declare(
    componentOrderResolvedVariantStyle,
    'extended-variant',
    componentHash ? componentHash : 'css-injected-extended-time',
    config
  );
  const extendedThemeDescendantVariantIDs = ExtendedStyleSheet.declare(
    descendantOrderResolvedVariantStyle,
    'extended-descendant-variant',
    componentHash ? componentHash : 'css-injected-extended-time-descendant',
    config
  );

  const styleIds = [
    ...extendedThemeBaseIDs,
    ...extendedThemeDescendantBaseIDs,
    ...extendedThemeVariantIDs,
    ...extendedThemeDescendantVariantIDs,
  ];

  const toBeInjected = ExtendedStyleSheet.resolve(styleIds, config, {});
  return { toBeInjected, styleIds };
};

// type aliases = const;

// const configNew = {
//   aliases: {
//     bg: 'backgroundColor',
//     w: 'width',
//     h: 'height',
//   } as const,
//   tokens: {
//     colors: {
//       primary: '#ff0000',
//       secondary: '#00ff00',
//     },
//     space: {
//       1: '1px',
//       2: '2px',
//     },
//   } as const,
// };
// createConfig({
//   ...configNew,
//   components: {
//     Button: {
//       theme: {
//         bg: '$primary',
//         variants: {
//           primary: {
//             bg: '$secondary',
//           },
//         },
//       },
//     },
//     ButtonText: {},
//   },
//   // components: {
//   //   Button: {
//   //     theme: {
//   //       bg: '$primary',
//   //     },
//   //   },
//   // } as IComponents<typeof aliases, typeof tokens>,
// });

// type components = {
//   Button: PressableProps;
//   ButtonText: TextProps;
// };

// type IComponents<Aliases, Tokens> = {
//   [key in keyof components]: {
//     theme: ITheme<Aliases, Tokens, components[key]>;
//   };
// };
