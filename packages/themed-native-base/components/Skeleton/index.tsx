import { Root as AccessibleSkeleton } from './styled-components';
import { AnimatedView as AccessibleAnimatedView } from './styled-components';

import { GenericComponentType } from '../../types';
import React, { forwardRef } from 'react';
import createSkeleton from './createSkeleton';
import { usePropResolution } from '../../hooks/usePropResolution';
import createSkeletonText from './createSkeletonText';

const SkeletonTemp = createSkeleton(AccessibleSkeleton, AccessibleAnimatedView);
const SkeletonTextTemp = createSkeletonText(SkeletonTemp);

const SkeletonNew = forwardRef(
  (
    {
      fadeDuration,
      speed,
      startColor,
      endColor,
      isLoaded = false,
      children,
      size,
      ...props
    }: any,
    ref?: any
  ) => {
    let ISizeProps = {};
    if (size) {
      ISizeProps = { height: size, width: size };
    }
    const resolvedProps = usePropResolution({ ...props, ...ISizeProps });
    return (
      <SkeletonTemp
        fadeDuration={fadeDuration}
        speed={speed}
        startColor={startColor}
        endColor={endColor}
        isLoaded={isLoaded}
        children={children}
        {...ISizeProps}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
) as any;

const SkeletonTextNew = forwardRef(
  (
    {
      children,
      startColor,
      endColor,
      lines = 3,
      isLoaded = false,
      size,
      _stack,
      ...props
    }: any,
    ref?: any
  ) => {
    let ISizeProps = {};
    if (size) {
      ISizeProps = { height: size, width: size };
    }
    const resolvedProps = usePropResolution({ ...props, ...ISizeProps });

    return (
      <SkeletonTextTemp
        children={children}
        startColor={startColor}
        endColor={endColor}
        lines={lines}
        isLoaded={isLoaded}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
);

SkeletonNew.Text = SkeletonTextNew;

type IColorToken = React.ComponentProps<typeof AccessibleSkeleton>['bg'];
type ISizeToken = React.ComponentProps<typeof AccessibleSkeleton>['h'];

// TODO: remove this when fixed from GenericComponentType
type ReplaceDollar<T> = T extends `$${infer N}` ? N : never;
type IColor = ReplaceDollar<IColorToken>;
type ISize = ReplaceDollar<ISizeToken> | number;
//
type ISkeletonComponentProps = {
  fadeDuration?: number;
  speed?: number;
  startColor?: IColor;
  endColor?: IColor;
  isLoaded?: false;
  size?: ISize;
};
type ISkeletonTextComponentProps = {
  fadeDuration?: number;
  speed?: number;
  startColor?: IColor;
  endColor?: IColor;
  isLoaded?: false;
  size?: ISize;
  lines?: number;
  _line?: any;
  _stack?: any;
};
export const Skeleton = SkeletonNew as ISkeletonComponentType<
  typeof AccessibleSkeleton,
  typeof AccessibleSkeleton
>;

export type ISkeletonComponentType<Skeleton, SkeletonText> =
  GenericComponentType<Skeleton, {}, ISkeletonComponentProps> & {
    Text: GenericComponentType<SkeletonText, {}, ISkeletonTextComponentProps>;
  };
