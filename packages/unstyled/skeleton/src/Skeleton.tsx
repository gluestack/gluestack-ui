import React, { forwardRef } from 'react';
import { Animated, Platform } from 'react-native';

// import type { ISkeletonProps } from './types';

export const Skeleton = (StyledSkeleton: any, StyledHighlight: any) =>
  forwardRef((props: any, ref: any) => {
    const isDomUsable = typeof window !== 'undefined' || Platform.OS !== 'web';
    const { children, fadeDuration, speed, ...resolvedProps } = props;
    // Setting blink Animation
    const blinkAnim = React.useRef(new Animated.Value(0)).current;

    // Generating blink animation in a sequence
    React.useEffect(() => {
      //Check if window is loaded
      if (isDomUsable) {
        const blink = Animated.sequence([
          Animated.timing(blinkAnim, {
            toValue: 1,
            duration: fadeDuration * 10000 * (1 / speed),
            useNativeDriver: Platform.OS !== 'web',
          }),
          Animated.timing(blinkAnim, {
            toValue: 0,
            duration: fadeDuration * 10000 * (1 / speed),
            useNativeDriver: Platform.OS !== 'web',
          }),
        ]);
        Animated.loop(blink).start();
      }
    }, [blinkAnim, isDomUsable, fadeDuration, speed]);

    return resolvedProps.isLoaded ? (
      children
    ) : (
      <StyledSkeleton ref={ref} {...resolvedProps}>
        <StyledHighlight
          style={{
            opacity: blinkAnim,
          }}
        />
      </StyledSkeleton>
    );
  });
