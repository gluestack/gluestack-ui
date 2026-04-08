import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import { useAnimatedReaction } from 'react-native-reanimated';
import { useBlankContext } from './blank-context';
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
  const { ref, onLayout } = useMessageHeight();

  useAnimatedReaction(
    () => ({
      user: context.userMessageHeight.value,
      assistant: context.assistantMessageHeight.value,
      keyboard: keyboardHeight.value,
      disabled,
    }),

    ({ user, assistant, disabled: isDisabled }) => {
      'worklet';
      console.log(
        user,
        assistant,
        disabled,
        context.messagesContainerHeight.value
      );

      const pairedHeight = user;
      const nextBlank = Math.max(
        0,
        context.messagesContainerHeight.value - pairedHeight - 46
      );
      console.log('blank', nextBlank);
      context.blankSize.value = nextBlank;
    }
  );

  return { ref, onLayout: onLayout };
}
