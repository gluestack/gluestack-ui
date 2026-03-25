import { useState, useCallback } from 'react';
import Animated, {
  useAnimatedRef,
  useAnimatedReaction,
  runOnUI,
  measure,
  runOnJS,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import { useMeasureHeight } from './useMessageHeight';
import { useWindowDimensions } from 'react-native';
export const useUserMessageAnimation = () => {
  const { ref, onLayout, height, y } = useMeasureHeight();
  const translateY = useSharedValue(0);
  const progress = useSharedValue(0);
  const windowHeight = useWindowDimensions().height;
  const didUserMessageAnimate = useSharedValue(0);
  useAnimatedReaction(
    () => {
      return height.value;
    },
    (messageHeight) => {
      'worklet';

      const composerHeightApprox = 80; // input bar + padding + borders
      const bottomPadding = 60; // visual offset so it starts "from below"
      const startY = Math.max(
        20,
        windowHeight - messageHeight - composerHeightApprox - bottomPadding
      );

      translateY.value = withTiming(startY, { duration: 0 }, () => {
        translateY.value = withSpring(0, {
          damping: 22,
          stiffness: 160,
          mass: 1,
          overshootClamping: true,
        });
      });
      progress.value = withTiming(1, {
        duration: 380,
      });
      didUserMessageAnimate.value = withTiming(1, { duration: 380 });
    },
    []
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: progress.value,
    };
  });

  return {
    ref: ref,
    onLayout,
    didUserMessageAnimate,
    style: animatedStyle,
  };
};
