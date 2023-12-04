import React, { forwardRef } from 'react';
import { Animated, Platform } from 'react-native';

export default function createSkeleton(Root: any, AnimatedView: any) {
  return forwardRef(
    (
      {
        fadeDuration = 0.1,
        speed = 1,
        startColor,
        endColor,
        children,
        isLoaded = false,
        ...props
      }: any,
      ref?: any
    ) => {
      let startClr = {};
      let endClr = {};

      if (startColor) startClr = { bg: `$${startColor}` };
      if (endColor) endClr = { bg: `$${endColor}` };
      const blinkAnim = new Animated.Value(0);

      const animationDuration = (fadeDuration * 10000) / speed; // Convert seconds to milliseconds

      const blink = Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]);

      if (!isLoaded) {
        const style = {
          opacity: blinkAnim, // Bind opacity to animated value
        };

        Animated.loop(blink).start();

        return (
          <Root {...endClr} {...props} ref={ref}>
            <AnimatedView style={style} {...startClr} />
          </Root>
        );
      } else {
        Animated.loop(blink).stop();

        return children;
      }
    }
  );
}
