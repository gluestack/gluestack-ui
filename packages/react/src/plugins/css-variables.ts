import type { IStyled, IStyledPlugin } from '../createStyled';
import { setObjectKeyValue } from '../utils';
import { injectGlobalCss } from '@dank-style/css-injector';

export class AnimationResolver implements IStyledPlugin {
  styledUtils: IStyled | undefined = {
    config: {
      ':animate': 'animate',
      ':initial': 'initial',
    },
  };

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

  inputMiddleWare(config: any) {
    this.injectCssVariablesGlobalStyle(config);
  }

  updateStyledObject(
    styledObject: any = {},
    resolvedStyledObject: any = {},
    keyPath: string[] = []
  ) {
    const config = this.styledUtils?.config;
    for (const prop in styledObject) {
      if (typeof styledObject[prop] === 'object') {
        keyPath.push(prop);
        this.updateStyledObject(
          styledObject[prop],
          resolvedStyledObject,
          keyPath
        );
        keyPath.pop();
      }

      if (config && config[prop]) {
        const value = styledObject[prop];
        keyPath.push('props', config[prop]);
        setObjectKeyValue(resolvedStyledObject, keyPath, value);
        keyPath.pop();
        keyPath.pop();
        delete styledObject[prop];
      }
    }

    return resolvedStyledObject;
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
}
