'use client';

import React, { useContext } from 'react';
import { View, ViewProps, Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageType } from './types';
import { useFirstMessageAnimation } from './useFirstMessageAnimation';

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

interface UserMessageProps extends ViewProps {
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

  const isNewestUserMessage =
    message.role === 'user' && index === messages.length - 1;

  const {
    style,
    ref: animRef,
    onLayout,
  } = useFirstMessageAnimation({
    disabled: !isNewestUserMessage,
  });

  return (
    <Animated.View
      ref={animRef}
      onLayout={isNewestUserMessage ? onLayout : undefined}
      style={style}
      className={messageContainerStyle({
        role: 'user',
        class: className,
      })}
      {...props}
    >
      <Text
        className='text-red-400'
      >
        {message.content}
      </Text>
    </Animated.View>
  );
});

UserMessage.displayName = 'UserMessage';
