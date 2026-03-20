'use client';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageType } from './types';
import  Animated, { useSharedValue } from 'react-native-reanimated';


interface ChatProps extends ViewProps {
  messages: ChatMessageType[];
  loading?: boolean;
  error?: Error | null;
  onSend?: (input: string) => void;
  reset?: () => void;
  setMessages?: (messages: ChatMessageType[]) => void;
  status?: 'idle' | 'loading' | 'error';
  children: React.ReactNode;
  blankSize?: Animated.SharedValue<number>;
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
    status: statusProp = 'idle',
    children,
    ...props
  },
  ref
) {

  const blankSize = useSharedValue(0);
   
  const send = (input: string) => {
    onSend?.(input);
  };

  const reset = () => {
    resetProp?.();
  };

  const setMessages = (msgs: ChatMessageType[]) => {
    setMessagesProp?.(msgs);
  };

  const contextValue = {
    messages,
    loading,
    error,
    send,
    reset,
    setMessages,
    status: statusProp,
    blankSize,
  };

  return (
    <ChatContext.Provider value={contextValue}>
      <View ref={ref} {...props}>
        {children}
      </View>
    </ChatContext.Provider>
  );
});

Chat.displayName = 'Chat';
