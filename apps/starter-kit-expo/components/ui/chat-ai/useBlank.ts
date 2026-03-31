import { useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import { useAnimatedReaction, withTiming } from 'react-native-reanimated';
import { useBlankContext } from './conversation';
import { useMessageHeight } from './useMessageHeight';

interface UseMessageBlankSizeOptions {
  disabled?: boolean;
  role: 'user' | 'assistant';
}

export function useBlankSize({
  disabled = false,
  role,
}: UseMessageBlankSizeOptions) {
  const context = useBlankContext();
  if (!context) {
    throw new Error('useMessageBlankSize must be used inside Chat');
  }

  const { height: keyboardHeight } = useReanimatedKeyboardAnimation();
  const windowHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();

  // Pass the correct shared value from context
  const targetHeight =
    role === 'user'
      ? context.userMessageHeight
      : context.assistantMessageHeight;

  const { ref, onLayout } = useMessageHeight(targetHeight);
  useAnimatedReaction(
    () => ({
      user: context.userMessageHeight.value,
      assistant: context.assistantMessageHeight.value,
      keyboard: keyboardHeight.value,
      disabled,
    }),
    ({ user, assistant, disabled: isDisabled }) => {
      'worklet';

      if (isDisabled) return;

      const pairedHeight = user + assistant;

      if (pairedHeight <= 0) return;

      const nextBlank = Math.max(
        0,
        context.messagesContainerHeight.value - pairedHeight 
      );

      context.blankSize.value = nextBlank;
    }
  );

  return { ref, onLayout: disabled ? undefined : onLayout };
}
