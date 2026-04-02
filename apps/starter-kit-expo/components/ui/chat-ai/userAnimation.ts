import {
  useAnimatedReaction,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
} from 'react-native-reanimated';

import { useMessageHeight } from './useMessageHeight';
import { useBlankContext } from './blank-context';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useUserMessageAnimation = ({
  disabled,
}: {
  disabled?: boolean;
}) => {
  const { ref, onLayout, targetHeight } = useMessageHeight();
  const translateY = useSharedValue(0);
  const progress = useSharedValue(-1);
  const windowHeight = useWindowDimensions().height;
  const { userMessageHeight } = useBlankContext();
  const insets = useSafeAreaInsets();
  useAnimatedReaction(
    () => {
      const didAnimate = progress.get() !== -1;

      if (disabled || didAnimate) return -1;

      return targetHeight.value;
    },

    (messageHeight) => {
      if (messageHeight <= 0) return;

      userMessageHeight.value = messageHeight;

      const startY = Math.max(20, windowHeight - messageHeight - insets.bottom);

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
    }
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: disabled ? 1 : progress.value,
    };
  });

  const didUserMessageAnimate = useDerivedValue(() =>
    disabled ? 1 : progress.get() === 1
  );

  return {
    ref: ref,
    onLayout,
    didUserMessageAnimate,
    style: animatedStyle,
  };
};
