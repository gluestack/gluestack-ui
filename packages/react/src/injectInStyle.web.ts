import { inject, injectGlobalCss, flush } from './utils/css-injector';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

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
export function injectInStyle(
  _globalStyleMap: any,
  orderedSXResolved: OrderedSXResolved,
  type: string,
  styleTagId: string
) {
  let toBeInjectedCssRules = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRules += styleResolved.meta.cssRuleset;
  });

  if (toBeInjectedCssRules) {
    inject(`@media screen {${toBeInjectedCssRules}}`, type as any, styleTagId);

    // if (typeof window !== 'undefined') {
    //   const styleTag = document.getElementById(styleTagId);

    //   if (!styleTag) {
    //     inject(`@media screen {${toBeInjectedCssRules}}`, type, styleTagId);
    //   }
    // }
  }
}
