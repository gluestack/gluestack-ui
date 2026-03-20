'use client';
import React, { useContext } from 'react';
import { View, ViewProps, Text } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { ChatMessage as ChatMessageType } from './types';
import { useMessageBlankSize } from './useMessageBlankSize';
import { ChatContext } from './context';

import Animated from 'react-native-reanimated';
const messageContainerStyle = tva({
  base: 'p-3 my-1 rounded-lg max-w-[80%]',
  variants: {
    role: {
      user: 'bg-primary self-end',
      assistant: 'bg-muted self-start',
    },
  },
});

const messageTextStyle = tva({
  base: 'text-sm',
  variants: {
    role: {
      user: 'text-primary-foreground',
      assistant: 'text-foreground',
    },
  },
});

interface ChatMessageProps extends ViewProps {
  message: ChatMessageType;
  textClassName?: string;
  index: number;
}

export const ChatMessage = React.forwardRef<
  React.ComponentRef<typeof View>,
  ChatMessageProps
>(function ChatMessage({ message, className,index, textClassName, ...props }, ref) {
  const context = useContext(ChatContext);
  const messages = context?.messages ?? [];

  // 🔥 detect ONLY the new user message
  const isNewUserMessage =
    message.role === 'user' &&
    index === messages.length - 1 

    const { ref: blankRef, onLayout } = useMessageBlankSize({
      isNewUserMessage,
    });
  return (
    <Animated.View
      ref={blankRef} // 🔥 attach for measurement
      onLayout={onLayout} // 🔥 triggers blank calc
      className={messageContainerStyle({
        role: message.role,
        class: className,
      })}
      {...props}
    >
      <Text
        className={messageTextStyle({
          role: message.role,
          class: textClassName,
        })}
      >
        {message.content}
      </Text>
    </Animated.View>
  );
});

ChatMessage.displayName = 'ChatMessage';
