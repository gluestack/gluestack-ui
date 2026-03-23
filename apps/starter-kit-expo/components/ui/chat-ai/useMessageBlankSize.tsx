import { useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, {
  useAnimatedReaction,
  withTiming,
} from 'react-native-reanimated';
import { ChatContext } from './context';
import { useMessageRenderedHeight } from './useMessageRenderedHeight';

interface UseMessageBlankSizeOptions {
  disabled?: boolean;
  role: 'user' | 'assistant';
}

export function useMessageBlankSize({
  disabled = false,
  role,
}: UseMessageBlankSizeOptions) {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useMessageBlankSize must be used inside Chat');
  }

  const { height: keyboardHeight } = useReanimatedKeyboardAnimation();
  const windowHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();

  const targetHeight =
    role === 'assistant'
      ? context.assistantMessageHeight
      : context.userMessageHeight;

  const { ref, onLayout } = useMessageRenderedHeight(targetHeight);

  useAnimatedReaction(
    () => {
      return {
        user: context.userMessageHeight.value,
        assistant: context.assistantMessageHeight.value,
        keyboard: keyboardHeight.value,
        composer: context.composerHeight.value,
        disabled,
      };
    },
    ({ user, assistant, keyboard, composer, disabled: isDisabled }) => {
      'worklet';

      if (isDisabled) return;

      const pairedHeight = assistant > 0 ? user + assistant : user;

      if (pairedHeight <= 0) return;

      const nextBlank = Math.max(
        0,
        windowHeight - pairedHeight - composer - keyboard - insets.bottom
      );

      context.blankSize.value = withTiming(nextBlank, { duration: 180 });
    }
  );

  return { ref, onLayout };
}
