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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBlank = () => {
  const { ref, onLayout, height, y } = useMeasureHeight();
  const blankSize = useSharedValue(0);
  const windowHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();
  useAnimatedReaction(
    () => {
      return height.value;
    },
    (height) => {
      blankSize.value =
        windowHeight - height - 100 - insets.bottom - insets.top;
    }
  );

  return {
    ref,
    onLayout,
    height,
    y,
    blankSize,
  };
};
