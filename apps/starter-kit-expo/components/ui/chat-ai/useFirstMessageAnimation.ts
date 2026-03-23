import { useWindowDimensions } from 'react-native';
import {
  useSharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';

import { useNewMessageAnimation } from './useNewMessageAnimation';
import { useMessageRenderedHeight } from './useMessageRenderedHeight';

interface UseFirstMessageAnimationProps {
  disabled?: boolean;
}

export function useFirstMessageAnimation({
  disabled = false,
}: UseFirstMessageAnimationProps) {
  const { height: keyboardHeight } = useReanimatedKeyboardAnimation();
  const { isMessageSendAnimating, finish: finishSendAnimation } =
    useNewMessageAnimation();
console.log('keyboardHeight the hoook is called',keyboardHeight.value);
  const windowHeight = useWindowDimensions().height;

  const translateY = useSharedValue(0);
  const progress = useSharedValue(0); // start at 0 → becomes 1 when done

  const { targetHeight, ref, onLayout } = useMessageRenderedHeight();

  useAnimatedReaction(
    () => {
 
      return targetHeight.value;
    },
    (messageHeight) => {
      'worklet';

    //   if (messageHeight <= 0) {runOnJS(console.log)('messageHeight is 0, skipping animation'); return};

      // ────────────────────────────────────────────────
      // Approximate starting Y position (near input bar)
      // Adjust these magic numbers based on your UI
      // ────────────────────────────────────────────────
      const composerHeightApprox = 80; // input bar + padding + borders
      const bottomPadding = 60; // visual offset so it starts "from below"

      const startY = Math.max(
  20,
        windowHeight -
          keyboardHeight.value -
          messageHeight -
          composerHeightApprox -
          bottomPadding
      );

      // 1. Instantly snap to starting position (no visible jump)
      translateY.value = withTiming(startY, { duration: 0 }, () => {
        // 2. Then spring to final position (0)
        translateY.value = withSpring(0, {
          damping: 22,
          stiffness: 160,
          mass: 1,
          overshootClamping: true,
        });
      });

      // Fade in smoothly (progress 0 → 1)
      progress.value = withTiming(1, {
        duration: 380, // main animation feel — tune this
      });

      // Mark animation as finished after a short delay
      // (gives spring + fade time to visually complete)
      setTimeout(() => {
        'worklet';
        progress.value = 1; // force complete
        runOnJS(finishSendAnimation)();
      }, 450);
    },
    [disabled] // dependencies (optional but good practice)
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: progress.value,
    };
  });

  const didUserMessageAnimate = useDerivedValue(() => {
    return progress.value >= 0.98; // almost finished → good enough for assistant fade-in
  });

  return {
    style: animatedStyle,
    ref,
    onLayout,
    didUserMessageAnimate,
  };
}
