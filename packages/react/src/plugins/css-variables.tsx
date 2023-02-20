import type { IStyled, IStyledPlugin } from '../createStyled';
import { deepMerge } from '../utils';
import { injectGlobalCss } from '@dank-style/css-injector';
import React, { useMemo } from 'react';
import { useStyled } from '../StyledProvider';
import { propertyTokenMap } from '../propertyTokenMap';

export class AddCssTokenVariables implements IStyledPlugin {
  styledUtils: IStyled | undefined;

  register(styledUtils: any) {
    if (this.styledUtils) {
      this.styledUtils.config = {
        ...this.styledUtils?.config,
        ...styledUtils?.config,
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
  }

  createCssVariables(tokens: any, prefix = 'dank-') {
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
    return (props: any, ref: any) => {
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
    };
  }

  inputMiddleWare(styledObj: any) {
    return styledObj;
  }
}
