import { styled } from './styled';
import type { ConfigType, ITheme } from './types';

export interface IStyledPlugin {
  styledUtils?: IStyled;
  register(styledUtils: IStyled): void;
  inputMiddleWare(styledObj: any): void;
  componentMiddleWare?(props: any): void;
}

export class IStyled {
  aliases?: any;
  tokens?: any;
  ref?: any;
}

export const createStyled = (plugins: any) => {
  let wrapperComponent: any;
  let styledComponent = <P, Variants>(
    Component: React.ComponentType<P>,
    styledObject: ITheme<Variants, P>,
    compConfig: ConfigType = {},
    extendedConfig: any = {}
  ) => {
    let styledObj: any = styledObject;
    for (const pluginName in plugins) {
      styledObj = plugins[pluginName]?.inputMiddleWare(styledObj);
    }

    let NewComp = styled<P, Variants>(
      Component,
      styledObj,
      compConfig,
      extendedConfig
    );

    // Running reverse loop to handle callstack side effects
    plugins.reverse();
    for (const pluginName in plugins) {
      if (plugins[pluginName]?.componentMiddleWare) {
        NewComp = plugins[pluginName]?.componentMiddleWare({
          NewComp,
          styledObject,
          compConfig,
          extendedConfig,
        });
      }
    }

    return NewComp;
  };

  for (const pluginName in plugins) {
    const compWrapper =
      typeof plugins[pluginName].wrapperComponentMiddleWare === 'function'
        ? plugins[pluginName].wrapperComponentMiddleWare()
        : null;

    if (compWrapper) {
      wrapperComponent = compWrapper;
    }
  }
  //@ts-ignore
  if (wrapperComponent) styledComponent.Component = wrapperComponent;

  return styledComponent;
};
