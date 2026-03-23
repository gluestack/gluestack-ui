import { useContext, useCallback } from 'react';
import { ChatContext } from './context';

export function useNewMessageAnimation() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useNewMessageAnimation must be used inside Chat');
  }

  const start = useCallback(() => {
    context.isMessageSendAnimating.value = true;
    context.didUserMessageAnimate.value = false;
  }, [context]);

  const finish = useCallback(() => {
    context.isMessageSendAnimating.value = false;
  }, [context]);

  return {
    isMessageSendAnimating: context.isMessageSendAnimating,
    didUserMessageAnimate: context.didUserMessageAnimate,
    start,
    finish,
  };
}
