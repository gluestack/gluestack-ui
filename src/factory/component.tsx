import React from 'react';
import { styled, useStyled } from '@gluestack-style/react';
import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
} from '../utils';

const transformTheme = (componentTheme: any) => {
  // FIX: Remove Hook from here
  const styledContext = useStyled();
  let transformedTheme: any = {
    variants: {
      variant: {
      }, size: {
      }
    },
    defaultProps: {}
  };
  const { baseStyle, variants, sizes, defaultProps } = componentTheme;

  const propsWithDollarSigns = addDollarSignsToProps(
    baseStyle,
    styledContext.config
  );

  // Transforms NativeBase Properties to Gluestack
  const sxProps = convertToSXForStateColorModeMediaQuery(
    propsWithDollarSigns,
    styledContext.config
  );
  transformedTheme = { ...transformedTheme, ...sxProps };

  // Mapping variants
  if (componentTheme.variants) {
    Object.keys(variants).forEach(variant => {
      const propsWithDollarSigns = addDollarSignsToProps(
        variants[variant],
        styledContext.config
      );
      const sxProps = convertToSXForStateColorModeMediaQuery(
        propsWithDollarSigns,
        styledContext.config
      );
      transformedTheme.variants.variant[variant] = sxProps;
    })
  }

  // Mapping Sizes
  if (componentTheme.sizes) {
    Object.keys(sizes).forEach(size => {
      const propsWithDollarSigns = addDollarSignsToProps(
        sizes[size],
        styledContext.config
      );
      const sxProps = convertToSXForStateColorModeMediaQuery(
        propsWithDollarSigns,
        styledContext.config
      );
      transformedTheme.variants.size[size] = sxProps;
    })
  }

  // Mapping Default Props
  if (componentTheme.defaultProps) {
    const propsWithDollarSigns = addDollarSignsToProps(
      defaultProps,
      styledContext.config
    );
    const sxProps = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      styledContext.config
    );
    transformedTheme.defaultProps = sxProps;
  }
  return transformedTheme;
};
export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: {
    variants?: Object;
    sizes?: Object;
    baseStyle?: Object;
    defaultProps?: Object;
  }
) {
  return styled(
    Component,
    transformTheme(componentTheme)
  );
}
