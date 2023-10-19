import React, { forwardRef } from 'react';
import { Animated } from 'react-native';

export default function createSkeleton(Root: any) {
  return forwardRef(
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

      const animationDuration = fadeDuration * 1000 * (1 / speed); // Convert seconds to milliseconds

      const firstAnimation = Animated.timing(backgroundColor, {
        toValue: 1,
        duration: animationDuration, // Half of the total duration
        useNativeDriver: false,
      });

      const secondAnimation = Animated.timing(backgroundColor, {
        toValue: 0,
        duration: animationDuration, // Half of the total duration
        useNativeDriver: false,
      });

      if (!isLoaded) {
        Animated.loop(Animated.sequence([firstAnimation, secondAnimation]), {
          iterations: -1, // Infinite loop
        }).start();

        const bgColor = backgroundColor.interpolate({
          inputRange: [0, 1],
          outputRange: [startColor, endColor],
        });

        const style = {
          backgroundColor: bgColor,
          height: '100%',
          width: '100%',
        };

        return (
          <Root {...props} ref={ref}>
            <Animated.View style={style} />
          </Root>
        );
      }

      Animated.loop(Animated.sequence([firstAnimation, secondAnimation]), {
        iterations: -1, // Infinite loop
      }).stop();

      return children;
    }
  );
}
