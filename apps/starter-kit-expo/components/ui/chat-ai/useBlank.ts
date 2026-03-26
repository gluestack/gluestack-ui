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
import { useBlankContext } from './conversation';
import { useMeasureHeight } from './useMessageHeight';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBlank = () => {

  const { ref, onLayout, height, y } = useMeasureHeight();
  const { blankSize, userMessageHeight } = useBlankContext();
  console.log('userMessageHeight from context', userMessageHeight.value);
  const windowHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();
  useAnimatedReaction(
    () => {
      return {
        height: height.value,
        y: y.value,
        userMessageHeight: userMessageHeight.value,
      };
    },
    ({ height, userMessageHeight,y }) => {

   
      blankSize.value = Math.max(
        0,
        windowHeight - y  - height  - insets.bottom - insets.top-120
      );
        console.log('height', height);
        console.log('userMessageHeight', userMessageHeight);
        console.log('windowHeight', windowHeight);
        console.log('insets.bottom', insets.bottom);
        console.log('insets.top', insets.top);
        console.log('y', y);
        console.log('blankSize', blankSize.value);
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
