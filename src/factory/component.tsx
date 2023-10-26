import React from 'react';
import { styled } from '@gluestack-style/react';
import { transformTheme } from '../utils';
import { config } from '../components/gluestack-ui.config';

// const transformTheme = (componentTheme: any) => {
//   // FIX: Remove Hook from here
//   const styledContext = useStyled();
//   let transformedTheme: any = {
//     variants: {
//       variant: {
//       }, size: {
//       }
//     },
//     defaultProps: {}
//   };
// const { baseStyle, variants, sizes, defaultProps } = componentTheme;

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: {
    variants?: Object;
    baseStyle?: Object;
    defaultProps?: Object;
  }
) {
  const clonedConfig: typeof config = JSON.parse(
    JSON.stringify(config)
  ) as typeof config;

  // console.log(transformTheme(componentTheme, clonedConfig));
  return styled(Component, transformTheme(componentTheme, clonedConfig));
}
