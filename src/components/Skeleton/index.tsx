import { Root as AccessibleSkeleton } from './styled-components';

import { GenericComponentType } from '../../types';
import React, { forwardRef } from 'react';
import createSkeleton from './createSkeleton';
import { usePropResolution } from '../../hooks/usePropResolution';
import { useColorMode, useToken } from '../../hooks';

const SkeletonTemp = createSkeleton(AccessibleSkeleton);

const SkeletonNew = forwardRef(
  (
    {
      fadeDuration = 0.1,
      speed = 0.1,
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
    const resolvedProps = usePropResolution(props);
    const { colorMode } = useColorMode();
    let startColorToken = '';
    if (startColor) startColorToken = startColor;
    else {
      startColorToken = colorMode === 'light' ? 'muted.600' : 'muted.200';
    }
    const startClr = useToken('colors', startColorToken);
    const endClr = useToken('colors', endColor);
    return (
      <SkeletonTemp
        fadeDuration={fadeDuration}
        speed={speed}
        startColor={startClr}
        endColor={endClr ?? 'transparent'}
        isLoaded={isLoaded}
        children={children}
        {...ISizeProps}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
) as any;

type IColorToken = React.ComponentProps<typeof AccessibleSkeleton>['bg'];
type ISizeToken = React.ComponentProps<typeof AccessibleSkeleton>['h'];

//TODO: remove this when fixed from GenericComponentType
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
export const Skeleton = SkeletonNew as ISkeletonComponentType<
  typeof AccessibleSkeleton
>;

export type ISkeletonComponentType<Skeleton> = GenericComponentType<
  Skeleton,
  ISkeletonComponentProps
>;
