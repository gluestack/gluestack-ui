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
      let colorSchemeSx: any = {};
      let colorSchemePassingPropsSx: any = {};

      const { sx, colorScheme, ...restProps } = componentProps;

      if (colorScheme) {
        let colorSchemeStyle = this.callback(componentProps);

        Object.keys(colorSchemeStyle).forEach((styleKey) => {
          if (
            styleKey.startsWith('_') ||
            styleKey.startsWith(':') ||
            styleKey.startsWith('@')
          ) {
            colorSchemeSx[styleKey] = colorSchemeStyle[styleKey];
          } else {
            colorSchemePassingPropsSx[styleKey] = colorSchemeStyle[styleKey];
          }
        });
      }

      const toBeAppliedSx = {
        ...sx,
        ...colorSchemeSx,
        props: {
          sx: colorSchemePassingPropsSx,
        },
      };

      return (
        <Component
          {...restProps}
          key={key ?? key + '_' + colorScheme}
          ref={ref}
          sx={toBeAppliedSx}
        />
      );
    });
  }
}
