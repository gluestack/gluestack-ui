import type { IStyled, IStyledPlugin } from '../types';
import { deepMerge } from '../utils';
import { injectGlobalCss } from '../utils/css-injector';
import React, { useMemo } from 'react';
import { useStyled } from '../StyledProvider';
import { propertyTokenMap } from '../propertyTokenMap';

export class AddCssTokenVariables implements IStyledPlugin {
  name: 'AddCssTokenVariables';
  styledUtils: IStyled | undefined = {};

  register(styledUtils: any) {
    if (this.styledUtils) {
      this.styledUtils.aliases = {
        ...this.styledUtils?.aliases,
        ...styledUtils?.aliases,
      };

      this.styledUtils.tokens = {
        ...this.styledUtils?.tokens,
        ...styledUtils?.tokens,
      };

      this.styledUtils.ref = styledUtils?.ref;
    }
    // this.styledUtils = styledUtils;
  }

  constructor(styledUtils: IStyled) {
    this.register(styledUtils);
    this.name = 'AddCssTokenVariables';
  }

  createCssVariables(tokens: any, prefix = 'gluestack-') {
    let cssVariables = '';
    for (const [key, value] of Object.entries(tokens)) {
      const variableName = `${prefix}${key}`;
      if (typeof value === 'object') {
        cssVariables += this.createCssVariables(value, `${variableName}-`);
      } else {
        cssVariables += `--${variableName}: ${value};\n`;
      }
    }
    return cssVariables;
  }

  injectCssVariablesGlobalStyle(componentExtendedConfig: any) {
    injectGlobalCss(
      `:root {${this.createCssVariables(componentExtendedConfig.tokens)}\n};`
    );
  }

  componentMiddleWare({ NewComp, extendedConfig }: any) {
    return React.forwardRef((props: any, ref: any) => {
      const styledContext = useStyled();
      const CONFIG = useMemo(
        () => ({
          ...styledContext.config,
          propertyTokenMap,
        }),
        [styledContext.config]
      );
      let componentExtendedConfig = CONFIG;
      if (extendedConfig) {
        componentExtendedConfig = deepMerge(CONFIG, extendedConfig);
      }

      this.injectCssVariablesGlobalStyle(componentExtendedConfig);
      return <NewComp ref={ref} {...props} />;
    });
  }

  inputMiddleWare(styledObj: any) {
    return styledObj;
  }
}
