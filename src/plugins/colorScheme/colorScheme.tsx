import React, { forwardRef } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';

export class ColorSchemeResolver implements IStyledPlugin {
  name: string;
  callback: any;

  // for debug purpose only
  from?: string;
  // no other use

  register() {}

  constructor(callback: any, from?: any) {
    this.name = 'ColorSchemeResolver';
    this.callback = callback;
    this.from = from;
  }

  inputMiddleWare(_styledObj: any = {}, _shouldUpdate: boolean = true) {
    return _styledObj;
  }

  componentMiddleWare({ Component }: any) {
    return forwardRef(({ key, ...componentProps }: any, ref?: any) => {
      let colorSchemeStyle = {};

      if (componentProps.colorScheme) {
        colorSchemeStyle = this.callback(componentProps);
      }
      // for debug purpose only
      // console.log('colorSchemeStyle',colorSchemeStyle, 'componentProps.colorScheme',componentProps.colorScheme);

      return (
        <Component
          {...componentProps}
          sx={{ ...colorSchemeStyle, ...componentProps.sx }}
          key={key ?? key + '_' + componentProps.colorScheme}
          ref={ref}
        />
      );
    });
  }
}
