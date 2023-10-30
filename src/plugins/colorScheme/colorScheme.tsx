import React, { forwardRef } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';

export class ColorSchemeResolver implements IStyledPlugin {
  name: string;
  callback: any;

  // for debug purpose only
  from?: string;
  styledComponentConfig: any;
  // no other use

  register() { }

  constructor(callback: any, from?: any) {
    this.name = 'ColorSchemeResolver';
    this.callback = callback;
    this.from = from;
  }
  // @ts-ignore
  inputMiddleWare(
    _styledObj: any = {},
    _shouldUpdate: boolean = true,
    _: boolean = false,
    Component: any,
    ...args: any
  ) {
    delete args?.[1]?.plugins;
    this.styledComponentConfig = args;
    return [_styledObj, _shouldUpdate, _, Component];
  }

  componentMiddleWare({ Component }: any) {
    const StyledComponent = styled(
      Component,
      {},
      ...this.styledComponentConfig
    );

    const ColorSchemeResolvedComponent = forwardRef(
      ({ key, ...componentProps }: any, ref?: any) => {
        // return <NewComp />;

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
          <StyledComponent
            {...restProps}
            key={key ?? key + '_' + colorScheme}
            ref={ref}
            sx={toBeAppliedSx}
          />
        );
      }
    );

    //@ts-ignore
    ColorSchemeResolvedComponent.isStyledComponent = true;
    return ColorSchemeResolvedComponent;
  }
}
