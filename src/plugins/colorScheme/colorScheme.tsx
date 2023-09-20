import React from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';

export class colorSchemeResolver implements IStyledPlugin {
  name: string;
  callback: any;

  register() {}

  constructor(callback: any) {
    this.name = 'ColorSchemeResolver';
    this.callback = callback;
  }

  inputMiddleWare(_styledObj: any = {}, _shouldUpdate: boolean = true) {
    return _styledObj;
  }

  componentMiddleWare({ Component }: any) {
    return ({ ...componentProps }: any) => {
      let colorSchemeStyle = {};
      if (componentProps.colorScheme) {
        colorSchemeStyle = this.callback(componentProps.colorScheme);
      }
      return <Component {...componentProps} sx={colorSchemeStyle} />;
    };
  }
}
