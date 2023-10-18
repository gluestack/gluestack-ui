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

  inputMiddleWare(...args: any) {
    return args;
  }

  componentMiddleWare({ Component }: any) {
    return forwardRef(({ key, ...componentProps }: any, ref?: any) => {
      const colorSchemeSx: any = {};
      const colorSchemePassingPropsSx: any = {};

      const { sx, colorScheme, ...restProps } = componentProps;

      if (colorScheme) {
        const colorSchemeStyle = this.callback(componentProps);

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
