import { useCallback } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import {
  useAnimatedRef,
  useSharedValue,
  type SharedValue,
} from 'react-native-reanimated';

interface UseMessageRenderedHeightProps {
  targetHeight?: SharedValue<number>; 
}

export function useMessageHeight(targetHeight?: SharedValue<number>) {
  const internalHeight = useSharedValue(0);
  const heightToUse = targetHeight || internalHeight;

  const ref = useAnimatedRef<View>();

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      'worklet';
      heightToUse.value = event.nativeEvent.layout.height;
    },
    [heightToUse]
  );

  return {
    ref,
    onLayout,
    targetHeight: heightToUse, 
  };
}
