import { useState, useCallback } from 'react';
import Animated, {
  useAnimatedRef,
  useAnimatedReaction,
  runOnUI,
  measure,
  runOnJS,
  useSharedValue,
} from 'react-native-reanimated';
import { useBlankContext } from './conversation';

export const useMeasureHeight = () => {
  const height = useSharedValue(0);
  const y = useSharedValue(0);
  const { userMessageHeight } = useBlankContext();
  

  // This is the correct animated ref for Reanimated
  const animatedRef = useAnimatedRef<Animated.View>();

  const onLayout = useCallback(() => {
    // Trigger measurement on the next frame
    runOnUI(() => {
      const measured = measure(animatedRef);

      if (measured) {
        // measured.height and measured.y are available on UI thread
        height.value = measured.height;
        y.value = measured.y;
        console.log('height', height.value);
        console.log('y', y.value);
      }
    })();
  }, [animatedRef, height, y]);
  
useAnimatedReaction(
  () => {
    return {
      height: height.value,
    };
  },
  (value) => {
    userMessageHeight.value = value.height;
  }
);

  return {
    ref: animatedRef, // ← Use this ref
    onLayout, // ← Call this in onLayout
    height,
    y,
  };
};
