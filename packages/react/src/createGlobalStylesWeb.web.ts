import { injectGlobalCssStyle } from './injectInStyle';
import { CreateCss } from './utils/cssify';
import { resolvedTokenization } from './utils';

export const createGlobalStylesWeb = (style: any) => {
  return (config: any) => {
    let css = ``;
    Object.keys(style).map((cssKey: string) => {
      const resolvedGlobalStyles = resolvedTokenization(style[cssKey], config);
      let rules = CreateCss(resolvedGlobalStyles);
      css += `\n${cssKey} ${rules}\n`;
    });

    injectGlobalCssStyle(css, 'global-styles');
  };
};
