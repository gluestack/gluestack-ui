import React from 'react';

import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export function styled<P>(Component: React.ComponentType<P>, theme: any) {
  return function (props: any) {
    const currentClassName: Array<string> = [];

    const { variantProps, restProps } = getVariantProps(props, theme);

    console.log(variantProps, 'variantProps');
    debugger;
    if (variantProps) {
      Object.keys(variantProps).forEach((variant) => {
        const variantName = variantProps[variant];
      });
    }

    return (
      <Component
        className={twMerge(clsx(...currentClassName))}
        {...restProps}
      />
    );
  };
}

export function getVariantProps(
  props: any,
  theme: any,
  shouldDeleteVariants: boolean = true
) {
  const variantTypes = theme?.variants ? Object.keys(theme.variants) : [];
  const variantProps: any = {};
  let restProps = { ...props };

  if (restProps) {
    variantTypes?.forEach((variant) => {
      if (
        props.hasOwnProperty(variant) &&
        theme.variants[variant]?.[props[variant]]
      ) {
        variantProps[variant] = props[variant];

        restProps = {
          ...theme?.variants[variant][props[variant]]?.props,
          ...restProps,
        };

        if (shouldDeleteVariants) {
          delete restProps[variant];
        }
      }
    });
  }

  return {
    variantProps,
    restProps,
  };
}
