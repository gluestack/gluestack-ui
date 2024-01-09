import React from 'react';

import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export function styled<P>(Component: React.ComponentType<P>, theme: any) {
  return function (props: any) {
    const currentClassName: Array<string> = [];

    const { variantProps, restProps } = getVariantProps(props, theme);

    if (theme?.baseStyle) {
      currentClassName.push(theme.baseStyle);
    }

    if (variantProps) {
      Object.keys(variantProps).forEach((variant) => {
        const variantName = variantProps[variant];
        if (theme?.variants[variant]?.[variantName]) {
          currentClassName.push(theme.variants[variant][variantName]);
          delete restProps[variant];
        }
      });

      // Check for compound variants
      theme?.compoundVariants?.forEach((compoundVariant: any) => {
        if (isValidVariantCondition(compoundVariant.condition, variantProps)) {
          if (compoundVariant) {
            currentClassName.push(compoundVariant.value);
          }
        }
      });
    }

    // console.log(
    //   currentClassName,
    //   twMerge(clsx(...currentClassName)),
    //   'twMerge(clsx(...currentClassName))'
    // );

    return (
      <Component
        {...restProps}
        className={twMerge(clsx(...currentClassName, restProps.className))}
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

function isValidVariantCondition(condition: any, variants: any) {
  for (const key in condition) {
    if (!variants.hasOwnProperty(key) || variants[key] !== condition[key]) {
      return false;
    }
  }
  return true;
}
