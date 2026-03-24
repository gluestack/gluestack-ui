import { useCallback } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { useAnimatedRef, useSharedValue, type SharedValue } from 'react-native-reanimated';

interface UseMessageRenderedHeightProps {
  targetHeight?: SharedValue<number>; // Optional for backward compatibility
}

export function useMessageRenderedHeight(targetHeight?: SharedValue<number>) {
  const internalHeight = useSharedValue(0); // fallback if no target passed
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
    targetHeight: heightToUse, // still return it for backward compatibility
  };
}
