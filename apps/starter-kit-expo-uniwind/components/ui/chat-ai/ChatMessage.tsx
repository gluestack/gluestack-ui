'use client';
import React from 'react';
import { View, ViewProps, Text } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { ChatMessage as ChatMessageType } from './types';

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
}

export const ChatMessage = React.forwardRef<
  React.ComponentRef<typeof View>,
  ChatMessageProps
>(function ChatMessage({ message, className, textClassName, ...props }, ref) {
  return (
    <View
      ref={ref}
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
    </View>
  );
});

ChatMessage.displayName = 'ChatMessage';
