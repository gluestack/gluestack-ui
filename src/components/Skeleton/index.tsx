import { Root as AccessibleSkeleton } from './styled-components';

import { GenericComponentType } from '../../types';
import React, { forwardRef, useState, useEffect } from 'react';
import { Animated } from 'react-native';

const SkeletonTemp = forwardRef(
  (
    {
      fadeDuration,
      speed,
      startColor,
      endColor,
      children,
      isLoaded = false,
      ...props
    }: any,
    ref?: any
  ) => {
    const backgroundColor = new Animated.Value(0);
    const [animationLoop, setAnimationLoop] = useState<
      Animated.CompositeAnimation | undefined
    >(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(startLoopAnimation, []);

    function startLoopAnimation() {
      const animationDuration = fadeDuration * 1000 * (1 / speed); // Convert seconds to milliseconds

      const firstAnimation = Animated.timing(backgroundColor, {
        toValue: 1,
        duration: animationDuration / 2, // Half of the total duration
        useNativeDriver: false,
      });

      const secondAnimation = Animated.timing(backgroundColor, {
        toValue: 0,
        duration: animationDuration / 2, // Half of the total duration
        useNativeDriver: false,
      });

      const loop = Animated.loop(
        Animated.sequence([firstAnimation, secondAnimation]),
        {
          iterations: -1, // Infinite loop
        }
      );
      setAnimationLoop(loop);
      loop.start();
    }

    const bgColor = backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: [startColor || 'grey', endColor || 'transparent'],
    });

    const style = {
      backgroundColor: bgColor,
      height: '100%',
      width: '100%',
    };

    if (isLoaded && animationLoop) animationLoop.stop();

    return isLoaded ? (
      children
    ) : (
      <AccessibleSkeleton {...props} ref={ref}>
        <Animated.View style={style}>{children}</Animated.View>
      </AccessibleSkeleton>
    );
  }
);

const SkeletonNew = SkeletonTemp as any;

export const Skeleton = SkeletonNew as ISkeletonComponentType<
  typeof AccessibleSkeleton
>;

export type ISkeletonComponentType<Skeleton> = GenericComponentType<Skeleton>;
