import { useCallback } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { useAnimatedRef, useSharedValue, type SharedValue } from 'react-native-reanimated';

export function useMessageRenderedHeight() {
    const targetHeight = useSharedValue(0)
  const ref = useAnimatedRef<View>();

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      targetHeight.value = event.nativeEvent.layout.height;
    },
    [targetHeight]
  );

  return { ref, onLayout,targetHeight };
}
