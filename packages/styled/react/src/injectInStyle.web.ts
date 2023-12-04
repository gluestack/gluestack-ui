import { inject, injectGlobalCss, flush } from './utils/css-injector';

export { flush };

function createCssVariables(tokens: any, prefix = 'gluestack-') {
  let cssVariables = '';
  for (const [key, value] of Object.entries(tokens)) {
    const variableName = `${prefix}${key}`;
    if (typeof value === 'object') {
      cssVariables += createCssVariables(value, `${variableName}-`);
    } else {
      cssVariables += `--${variableName}: ${value};\n`;
    }
  }
  return cssVariables;
}

export function injectGlobalCssStyle(
  css: any,
  styleTagId: string = 'css-injected-global'
) {
  injectGlobalCss(css, styleTagId);
}

export function injectCssVariablesGlobalStyle(componentExtendedConfig: any) {
  injectGlobalCss(
    `:root {${createCssVariables(componentExtendedConfig.tokens)}\n};`
  );
}
export function injectInStyle(_globalStyleMap: any) {
  _globalStyleMap.forEach(
    (componentThemeHash: any, componentThemeHashKey: any) => {
      componentThemeHash.forEach(
        (componentThemes: any, componentThemesKey: any) => {
          let toBeInjectedCssRules = '';
          componentThemes.forEach((componentTheme: any) => {
            const cssRuleset = componentTheme?.meta?.cssRuleset;
            if (cssRuleset) {
              toBeInjectedCssRules += cssRuleset;
            }
          });

          if (toBeInjectedCssRules) {
            inject(
              `@media screen {${toBeInjectedCssRules}}`,
              componentThemeHashKey as any,
              componentThemesKey
            );
          }
        }
      );
    }
  );

  // _globalStyleMap?.forEach((values: any, key: any) => {
  //   values?.forEach((value: any) => {
  //     value?.forEach((currVal: any) => {
  //       const styleTagId = Object.keys(currVal)[0];

  //       const orderedResolved = currVal[styleTagId];

  //       let toBeInjectedCssRules = '';
  //       Object.keys(orderedResolved)?.map((orderResolvedKey) => {
  //         const finalOrderResolved = Object.keys(
  //           orderedResolved[orderResolvedKey]
  //         )[0];

  //         const cssRuleset =
  //           orderedResolved?.[orderResolvedKey]?.[finalOrderResolved]?.value;

  //         if (cssRuleset) {
  //           toBeInjectedCssRules += cssRuleset;
  //         }
  //       });
  //       if (toBeInjectedCssRules) {
  //         inject(
  //           `@media screen {${toBeInjectedCssRules}}`,
  //           key as any,
  //           styleTagId
  //         );
  //       }
  //     });
  //   });
  // });
}
