import React from 'react';
import { styled, useStyled } from '@gluestack-style/react';
import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
  transformTheme,
} from '../utils';
import { config } from '../components/gluestack-ui.config';
import { extendTheme } from '../utils/extendTheme';


export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: {
    variants?: Object;
    sizes?: Object;
    baseStyle?: Object;
    defaultProps?: Object;
  }
) {
  const clonedConfig: typeof config = JSON.parse(
    JSON.stringify(config)
  ) as typeof config;

  console.log(transformTheme(componentTheme, clonedConfig))
  return styled(
    Component,
    transformTheme(componentTheme, clonedConfig)
  );
}
