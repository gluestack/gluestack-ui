'use client';

import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { ChatContext } from './context';
import type { ChatContextValue, ChatMessage, ChatStatus } from './types';

interface ChatProps extends ViewProps {
  messages: ChatMessage[];
  loading?: boolean;
  error?: Error | null;
  onSend?: (input: string) => void;
  reset?: () => void;
  setMessages?: (messages: ChatMessage[]) => void;
  status?: ChatStatus;
  children: React.ReactNode;
}

export const Chat = React.forwardRef<
  React.ComponentRef<typeof View>,
  ChatProps
>(function Chat(
  {
    messages,
    loading = false,
    error = null,
    onSend,
    reset: resetProp,
    setMessages: setMessagesProp,
    status = 'idle',
    children,
    ...props
  },
  ref
) {
  const blankSize = useSharedValue(0);
  const composerHeight = useSharedValue(0);
  const userMessageHeight = useSharedValue(0);
  const assistantMessageHeight = useSharedValue(0);

  const isMessageSendAnimating = useSharedValue(false);
  const didUserMessageAnimate = useSharedValue(false);

  const send = (input: string) => {
    isMessageSendAnimating.value = true;
    didUserMessageAnimate.value = false;
    onSend?.(input);
  };

  const reset = () => {
    blankSize.value = 0;
    composerHeight.value = 0;
    userMessageHeight.value = 0;
    assistantMessageHeight.value = 0;
    isMessageSendAnimating.value = false;
    didUserMessageAnimate.value = false;
    resetProp?.();
  };

  const setMessages = (nextMessages: ChatMessage[]) => {
    setMessagesProp?.(nextMessages);
  };

  const contextValue: ChatContextValue = {
    messages,
    loading,
    error,
    status,
    send,
    reset,
    setMessages,
    blankSize,
    composerHeight,
    userMessageHeight,
    assistantMessageHeight,
    isMessageSendAnimating,
    didUserMessageAnimate,
  };

  return (
    <ChatContext.Provider value={contextValue}>
      <View className='bg-background' ref={ref} {...props}>
        {children}
      </View>
    </ChatContext.Provider>
  );
});

Chat.displayName = 'Chat';
