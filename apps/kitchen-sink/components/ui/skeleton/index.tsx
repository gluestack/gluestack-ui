import React, { forwardRef } from 'react';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { View } from 'react-native';
import { skeletonStyle, skeletonTextStyle } from './styles';

type ISkeletonProps = React.ComponentProps<typeof View> &
  VariantProps<typeof skeletonStyle> & {
    isLoaded?: boolean;
    startColor?: string;
    speed?: number | string;
  };

type ISkeletonTextProps = React.ComponentProps<typeof View> &
  VariantProps<typeof skeletonTextStyle> & {
    _lines?: number;
    isLoaded?: boolean;
    startColor?: string;
  };

const Skeleton = forwardRef<React.ComponentRef<typeof View>, ISkeletonProps>(
  function Skeleton(
    {
      className,
      variant,
      children,
      startColor = 'bg-accent',
      isLoaded = false,
      speed = 4,
      ...props
    },
    ref
  ) {
    if (!isLoaded) {
      return (
        <View
          className={`animate-pulse ${startColor} ${skeletonStyle({
            variant,
            speed: speed as 1 | 2 | 3 | 4,
            class: className,
          })}`}
          {...props}
          ref={ref}
        />
      );
    } else {
      return children;
    }
  }
);

const SkeletonText = forwardRef<
  React.ComponentRef<typeof View>,
  ISkeletonTextProps
>(function SkeletonText(
  {
    className,
    _lines,
    isLoaded = false,
    startColor = 'bg-accent',
    gap = 2,
    children,
    ...props
  },
  ref
) {
  if (!isLoaded) {
    if (_lines) {
      return (
        <View
          className={`flex flex-col ${skeletonTextStyle({
            gap,
          })}`}
          ref={ref}
        >
          {Array.from({ length: _lines }).map((_, index) => (
            <Skeleton
              key={index}
              className={`${startColor} ${skeletonTextStyle({
                class: className,
              })}`}
              {...props}
            />
          ))}
        </View>
      );
    } else {
      return (
        <Skeleton
          className={`${startColor} ${skeletonTextStyle({
            class: className,
          })}`}
          {...props}
          ref={ref}
        />
      );
    }
  } else {
    return children;
  }
});

Skeleton.displayName = 'Skeleton';
SkeletonText.displayName = 'SkeletonText';

export { Skeleton, SkeletonText };
