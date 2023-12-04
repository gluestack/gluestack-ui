import type {
  IAnimationDriverPlugin,
  IAnimationResolver,
} from '@gluestack-style/react';
import React from 'react';
import { deepMerge } from './utils';
import {
  Motion,
  AnimatePresence as MotionAnimatePresence,
  createMotionAnimatedComponent,
} from '@legendapp/motion';
import { MotionSvg } from '@legendapp/motion/svg';
import { propertyTokenMap } from './propertyTokenMap';
import { Pressable } from 'react-native';

function getVariantProps(props: any, theme: any) {
  const variantTypes = theme?.variants ? Object.keys(theme.variants) : [];

  const restProps = { ...props };

  const variantProps: any = {};
  variantTypes?.forEach((variant) => {
    if (props[variant]) {
      variantProps[variant] = props[variant];
      // delete restProps[variant];
    }
  });

  return {
    variantProps,
    restProps,
  };
}

function resolveVariantAnimationProps(variantProps: any, styledObject: any) {
  let resolvedVariant = {};
  Object.keys(variantProps).forEach((variant) => {
    const variantValue = variantProps[variant];
    const variantObject = styledObject?.variants?.[variant]?.[variantValue];

    resolvedVariant = deepMerge(resolvedVariant, variantObject);
  });

  return resolvedVariant;
}

const AnimatePresence = React.forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const clonedChildren: any = [];

    React.Children.toArray(children).forEach((child: any) => {
      if (
        (child?.type?.displayName &&
          child?.type?.displayName.includes('Gluestack-AnimatedResolver')) ||
        child?.type?.isStyledComponent
      ) {
        const componentStyledObject = child?.type?.getStyledData()?.config;

        const { variantProps, restProps } = getVariantProps(
          { ...componentStyledObject?.props, ...child?.props },
          componentStyledObject
        );

        const variantStyledObject: any = resolveVariantAnimationProps(
          variantProps,
          componentStyledObject
        );

        const exit = {
          ...componentStyledObject?.[':exit'],
          ...variantStyledObject?.[':exit'],
          ...restProps?.sx?.[':exit'],
          ...restProps?.exit,
        };

        const clonedChild = React.cloneElement(child, {
          exit,
          ...restProps,
        });

        clonedChildren.push(clonedChild);
      } else {
        clonedChildren.push(child);
      }
    });

    return (
      <MotionAnimatePresence ref={ref} {...props}>
        {clonedChildren}
      </MotionAnimatePresence>
    );
  }
);

const AnimatedPressable = createMotionAnimatedComponent(
  Pressable
) as React.ComponentType<typeof Pressable>;

const MotionComponents = {
  ...Motion,
  ...MotionSvg,
  Pressable: AnimatedPressable,
  AnimatePresence,
};

export class MotionAnimationDriver implements IAnimationDriverPlugin {
  name: 'MotionAnimationDriver';
  engine = MotionComponents;
  config = {
    aliases: {
      ':animate': 'animate',
      ':initial': 'initial',
      ':exit': 'exit',
      ':initialProps': 'initialProps',
      ':animateProps': 'animateProps',
      ':transition': 'transition',
      ':transformOrigin': 'transformOrigin',
      ':whileTap': 'whileTap',
      ':whileHover': 'whileHover',
      ':onAnimationComplete': 'onAnimationComplete',
    } as const,
  };

  register(config: any) {
    if (this.config) {
      this.config.aliases = {
        ...this.config?.aliases,
        ...config?.aliases,
      };

      // @ts-ignore
      this.config.tokens = {
        // @ts-ignore
        ...this.config?.tokens,
        ...config?.tokens,
      };

      // @ts-ignore
      this.config.ref = config?.ref;
    }
  }

  constructor(config?: IAnimationResolver) {
    this.register(config);
    this.name = 'MotionAnimationDriver';
    this.engine.AnimatePresence.defaultProps = {
      ...this.engine.AnimatePresence.defaultProps,
      config,
    };
  }
}
