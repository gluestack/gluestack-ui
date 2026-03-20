'use client';
import React, { useContext, useCallback } from 'react';
import { View, LayoutChangeEvent, useWindowDimensions } from 'react-native';
import Animated, { useSharedValue, runOnUI, useAnimatedReaction,withTiming } from 'react-native-reanimated';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import { ChatContext } from './context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useMessageBlankSize({
  isNewUserMessage = false,   // set true ONLY for the user message that just entered
}: {
  isNewUserMessage?: boolean;
}) {
  const context = useContext(ChatContext);
  const blankSize = context?.blankSize ?? useSharedValue(0);

  const { height: keyboardHeight } = useReanimatedKeyboardAnimation();
  const windowHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();
  const messageHeight = useSharedValue(0);
  const ref = React.useRef<View>(null);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height;
    runOnUI(() => {
      messageHeight.value = height;

      if (isNewUserMessage && height > 0) {
        // 🔥 Vercel-style calculation for the user message just entered
        const composerHeight = 50; // your ChatInput height (or measure it too)
        const margin = 40;         // visual breathing room

        const calculatedBlank = Math.max(
          0,
          windowHeight - height - composerHeight - keyboardHeight.value - insets.bottom-insets.top
        );

        blankSize.value = withTiming(calculatedBlank, { duration: 0 }); // instant
      }
    })();
  }, [isNewUserMessage, windowHeight, keyboardHeight.value]);

  // 🔥 Live update blankSize when keyboard opens/closes (exactly like Vercel)
  useAnimatedReaction(
    () => keyboardHeight.value,
    (currentKeyboard) => {
      if (!isNewUserMessage) return;
      const currentMessageH = messageHeight.value;
      if (currentMessageH <= 0) return;

      const composerHeight = 80;
      const margin = 40;
console.log("bottom insets",insets.bottom)
      blankSize.value = Math.max(
        0,
        windowHeight - currentMessageH - composerHeight - currentKeyboard - margin - insets.bottom
      );
    }
  );

  return { ref, onLayout };
}