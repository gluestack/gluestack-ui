'use client';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { ChatMessage as ChatMessageType } from './types';
import { UserMessage } from './UserMessage';
import { AssistantMessage } from './AssistantMessage';

export interface ChatMessageProps extends ViewProps {
  message: ChatMessageType;
  textClassName?: string;
  index: number;
}

export const ChatMessage = React.forwardRef<
  React.ComponentRef<typeof View>,
  ChatMessageProps
>(function ChatMessage(
  { message, className, index, textClassName, ...props },
  ref
) {
  if (message.role === 'user') {
    return (
      <UserMessage
        ref={ref}
        message={message}
        className={className}
        index={index}
        textClassName={textClassName}
        {...props}
      />
    );
  }

  return (
    <AssistantMessage
      ref={ref}
      message={message}
      className={className}
      index={index}
      textClassName={textClassName}
      {...props}
    />
  );
});

ChatMessage.displayName = 'ChatMessage';

export { UserMessage, AssistantMessage };
