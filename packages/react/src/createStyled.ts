import { styled } from './styled';

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
  return (
    Component: any,
    styledObject: any,
    compConfig: any = {},
    extendedConfig: any = {}
  ) => {
    let styledObj: any = styledObject;
    for (const pluginName in plugins) {
      styledObj = plugins[pluginName]?.inputMiddleWare(styledObj);
    }
    let NewComp = styled(Component, styledObj, compConfig, extendedConfig);

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
};
