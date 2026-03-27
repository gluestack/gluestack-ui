import { useMemo } from 'react';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';
import { useKeyboardHandler } from 'react-native-keyboard-controller';

import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';

export const useKeyboardAwareChat = () => {
  // 🔹 Shared values
  const keyboardHeight = useSharedValue(0);
  const keyboardProgress = useSharedValue(0);
  const scrollY = useSharedValue(0);

  // 🔹 Keyboard tracking (native-driven interactive)
  useKeyboardHandler({
    onInteractive: (e) => {
      'worklet'; // ✅ REQUIRED

      keyboardHeight.value = e.height;
      keyboardProgress.value = e.progress;
    },
  });

  // 🔹 Scroll tracking
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
    },
  });

  // 🔹 Derived keyboard offset
  const keyboardOffset = useDerivedValue(() => {
    return keyboardHeight.value * keyboardProgress.value;
  });

  // 🔹 Input bar animation
  const inputStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -keyboardOffset.value,
        },
      ],
    };
  });

  // 🔹 Optional: list bottom spacing (smooth)
  const listContentStyle = useAnimatedStyle(() => {
    return {
      paddingBottom: keyboardOffset.value,
    };
  });

  // 🔹 (Optional) Gesture placeholder for future extension
  const panGesture = useMemo(() => {
    return Gesture.Pan(); // currently not controlling keyboard
  }, []);

  return {
    scrollHandler,
    inputStyle,
    listContentStyle,
    panGesture,
  };
};
