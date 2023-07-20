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
  _globalStyleMap?.forEach((values: any, key: any) => {
    values?.forEach((value: any) => {
      value?.forEach((currVal: any) => {
        const styleTagIds = Object.keys(currVal);

        styleTagIds?.forEach((styleTagId) => {
          const orderedResolved = currVal[styleTagId];
          let toBeInjectedCssRules = '';
          Object.keys(orderedResolved)?.map((orderResolvedKey) => {
            const finalOrderResolved = Object.keys(
              orderedResolved[orderResolvedKey]
            );

            finalOrderResolved?.map((style: any) => {
              const cssRuleset =
                orderedResolved?.[orderResolvedKey]?.[style]?.value;

              if (cssRuleset) {
                toBeInjectedCssRules += cssRuleset;
              }
            });
          });
          if (toBeInjectedCssRules) {
            inject(
              `@media screen {${toBeInjectedCssRules}}`,
              key as any,
              styleTagId
            );
          }
        });
      });
    });
  });
}
