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

export interface UserMessageProps extends ViewProps {
  message: ChatMessageType;
  textClassName?: string;
  index: number;
}

export const UserMessage = React.forwardRef<
  React.ComponentRef<typeof View>,
  UserMessageProps
>(function UserMessage(
  { message, className, index, textClassName, ...props },
  ref
) {
  const context = useContext(ChatContext);
  const messages = context?.messages ?? [];

  const isNewUserMessage =
    message.role === 'user' && index === messages.length - 1;

  const { ref: blankRef, onLayout } = useMessageBlankSize({
    isNewUserMessage,
  });

  return (
    <Animated.View
      ref={blankRef}
      onLayout={onLayout}
      className={messageContainerStyle({
        role: 'user',
        class: className,
      })}
      {...props}
    >
      <Text
        className={messageTextStyle({
          role: 'user',
          class: textClassName,
        })}
      >
        {message.content}
      </Text>
    </Animated.View>
  );
});

UserMessage.displayName = 'UserMessage';
