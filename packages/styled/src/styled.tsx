import React from 'react';
import { config as uiConfig } from './nativebase.config';
import { Platform, StyleSheet } from 'react-native';
import type {
  ConfigType,
  IStates,
  state,
  StylePropsConfig,
  SxProps,
  ThemeType,
} from './types';

function resolveAliasesFromConfig(config: any, props: any) {
  const aliasResolvedProps: any = {};
  Object.keys(props).map((key) => {
    if (config.aliases[key]['property']) {
      aliasResolvedProps[config.aliases[key]['property']] = props[key];
    } else {
      aliasResolvedProps[key] = props[key];
    }
  });
  return aliasResolvedProps;
}

function resolveTokensFromConfig(config: any, props: any) {
  const newProps: any = {};
  Object.keys(props).map((prop: any) => {
    const value = props[prop];
    const configAlias = config?.aliases[prop]?.scale;
    const tokenPath = config?.tokens[configAlias];
    let token;

    if (value.startsWith('$')) {
      const originalValue = value.slice(1);
      if (value.includes('.')) {
        const [tokenA, tokenB] = originalValue.split('.');
        token = tokenPath[tokenA][tokenB];
      } else {
        token = tokenPath[originalValue];
      }
    } else {
      token = value;
    }
    newProps[prop] = token;
  });

  return newProps;
}

function applyStylesBasedOnSpecificty(
  specificityMap: any,
  stylesheetObj: any,
  resolvedCompThemeStyle: any
) {
  return specificityMap.map((key: any) => {
    return [resolvedCompThemeStyle[key], stylesheetObj[key]];
  });
}

function resolvedTokenization(props: any, config: any) {
  const newProps = resolveTokensFromConfig(config, props);
  const aliasedResolvedProps = resolveAliasesFromConfig(config, newProps);

  return aliasedResolvedProps;
}

const resolveSxRecursive = (
  sx: SxProps = {},
  config: StylePropsConfig,
  states: IStates,
  colorMode: string,
  styleSheetsObj: any,
  resolveDecendantStyles: any,
  parent: any = ''
) => {
  Object.keys(sx).forEach((key) => {
    if (key === 'style') {
      let resolvedStyle = resolvedTokenization(sx?.style, config);

      if (parent && parent != 'style') {
        if (styleSheetsObj[parent]) {
          styleSheetsObj[parent].push(resolvedStyle);
        } else {
          styleSheetsObj[parent] = [resolvedStyle];
        }
      } else {
        if (styleSheetsObj?.style) {
          styleSheetsObj.style.push(resolvedStyle);
        } else {
          styleSheetsObj.style = [resolvedStyle];
        }
      }
    } else {
      if (key === 'state') {
        if (states) {
          const stateObject: any = Object.keys(states);

          stateObject.forEach((state: state) => {
            //@ts-ignore
            if (states[state] && sx[key][state]) {
              resolveSxRecursive(
                //@ts-ignore
                sx[key][state],
                config,
                states,
                colorMode,
                styleSheetsObj,
                resolveDecendantStyles,
                key
              );
            }
          });
        }
      } else if (key === 'platform') {
        const platformKey = Platform.OS;
        //@ts-ignore
        if (sx[key][platformKey]) {
          resolveSxRecursive(
            //@ts-ignore
            sx[key][platformKey],
            config,
            states,
            colorMode,
            styleSheetsObj,
            resolveDecendantStyles,
            key
          );
        }
      } else if (key === 'colorMode') {
        //@ts-ignore
        if (sx[key][colorMode]) {
          resolveSxRecursive(
            //@ts-ignore
            sx[key][colorMode],
            config,
            states,
            colorMode,
            styleSheetsObj,
            resolveDecendantStyles,
            key
          );
        }
      } else if (key === 'descendants') {
        //@ts-ignore
        // const descendantsArray: any = Object.keys(sx[key]);
        //@ts-ignore
        Object.keys(sx[key]).forEach((descKey) => {
          let decendantStyle = [] as any;
          resolveSxRecursive(
            //@ts-ignore
            sx[key][descKey],
            config,
            states,
            colorMode,
            decendantStyle,
            resolveDecendantStyles,
            parent
          );
          if (!resolveDecendantStyles[descKey]) {
            resolveDecendantStyles[descKey] = {};
          }
          if (resolveDecendantStyles[descKey]) {
            if (parent && parent != 'style') {
              if (resolveDecendantStyles[descKey][parent]) {
                resolveDecendantStyles[descKey][parent].push(
                  decendantStyle[parent]
                );
              } else {
                resolveDecendantStyles[descKey][parent] = [
                  decendantStyle[parent],
                ];
              }
            } else {
              if (resolveDecendantStyles[descKey]?.style) {
                resolveDecendantStyles[descKey].style.push(
                  decendantStyle.style
                );
              } else {
                resolveDecendantStyles[descKey].style = [decendantStyle.style];
              }
            }
          }
        });
      }
    }
  });
  return styleSheetsObj;
};

function resolveSx(
  { sx, variant, size, colorMode, states, ancestorStyle }: any,
  compTheme: any
) {
  const styleSheetsObj = [] as any;

  const resolvedDecendantStyles = {} as any;
  const resolvedCompThemeStyle = [] as any;

  resolveSxRecursive(
    compTheme.baseStyle,
    uiConfig,
    states,
    colorMode,
    resolvedCompThemeStyle,
    resolvedDecendantStyles
  );

  // Resolve variants:
  if (variant) {
    resolveSxRecursive(
      compTheme.variants[variant],
      uiConfig,
      states,
      colorMode,
      styleSheetsObj,
      resolvedDecendantStyles
    );
  }
  // Resolve size:
  if (size) {
    resolveSxRecursive(
      compTheme.sizes[size],
      uiConfig,
      states,
      colorMode,
      styleSheetsObj,
      resolvedDecendantStyles
    );
  }

  // let tokenResolvedProps;

  if (!styleSheetsObj.style) {
    styleSheetsObj.style = [];
  }

  styleSheetsObj.style.push(ancestorStyle);

  if (sx) {
    const { ...remainingSx } = sx;
    resolveSxRecursive(
      remainingSx,
      uiConfig,
      states,
      colorMode,
      styleSheetsObj,
      resolvedDecendantStyles
    );
  }

  let mergedDecendantStylesBasedOnSpecificity = {} as any;

  Object.keys(resolvedDecendantStyles).forEach((descendant) => {
    mergedDecendantStylesBasedOnSpecificity[descendant] = {};
    mergedDecendantStylesBasedOnSpecificity[descendant] =
      applyStylesBasedOnSpecificty(
        ['style', 'colorMode', 'platform', 'state', 'ancestorStyle'],
        resolvedDecendantStyles[descendant],
        {}
      );
  });
  return {
    styleSheetsObj: applyStylesBasedOnSpecificty(
      ['style', 'colorMode', 'platform', 'state'],
      styleSheetsObj,
      resolvedCompThemeStyle
    ),
    resolveContextChildrenStyle: mergedDecendantStylesBasedOnSpecificity,
  };
}

// Wont work in nested resolution of pseudo props
// function resolveContextChildrenStyle(config: any, theme: any, props: any) {
//   let resolvedStyle = {} as any;

//   if (config?.forwardStyle) {
//     let forwardStyle = new Array(config?.forwardStyle);
//     forwardStyle.map((key) => {
//       resolvedStyle[key] = resolveSx(props, theme[key]);
//     });
//   }
//   return resolvedStyle;
// }

export function styled<P>(
  Component: React.ComponentType<P>,
  theme: ThemeType,
  compConfig: ConfigType
) {
  const NewComp = (properties: any, ref: any) => {
    const mergedProps = {
      ...theme?.defaultProps,
      ...properties,
    };

    const {
      children,
      sx,
      variant,
      size,
      states,
      colorMode,
      ancestorStyle,
      ...props
    } = mergedProps;

    const newStyle = resolveSx(
      {
        sx,
        variant,
        states,
        colorMode: colorMode ?? 'light',
        size,
        ancestorStyle,
      },
      theme
    );

    const styleSheetObj = StyleSheet.create(newStyle.styleSheetsObj);

    return (
      <Component style={styleSheetObj} {...props} ref={ref}>
        {typeof children === 'function'
          ? children({
              resolveContextChildrenStyle: newStyle.resolveContextChildrenStyle,
            })
          : children}
      </Component>
    );
  };

  const StyledComp = React.forwardRef(NewComp);
  // @ts-ignore
  StyledComp.config = compConfig;
  return StyledComp;
}
