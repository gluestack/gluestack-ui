import { styled } from './styled';
import type { IComponentStyleConfig, ITheme } from './types';

export const createStyled = (plugins: any) => {
  let styledComponent = <P, Variants, ConCom>(
    Component: React.ComponentType<P>,
    styledObject: ITheme<Variants, P>,
    compConfig: IComponentStyleConfig<ConCom> = {},
    extendedConfig: any = {}
  ) => {
    let styledObj: any = styledObject;
    for (const pluginName in plugins) {
      styledObj = plugins[pluginName]?.inputMiddleWare(styledObj);
    }

    let NewComp = styled<P, Variants, ConCom>(
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
      for (const key of Object.keys(compWrapper)) {
        // @ts-ignore
        styledComponent[key] = compWrapper[key];
      }
    }
  }

  return styledComponent;
};
