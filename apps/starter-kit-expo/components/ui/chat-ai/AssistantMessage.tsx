'use client';
import React from 'react';
import { View, ViewProps, Text, ActivityIndicator } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { ChatMessage as ChatMessageType } from './types';
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

export interface AssistantMessageProps extends ViewProps {
  message: ChatMessageType;
  textClassName?: string;
  index: number;
}

export const AssistantMessage = React.forwardRef<
  React.ComponentRef<typeof View>,
  AssistantMessageProps
>(function AssistantMessage(
  { message, className, index, textClassName, ...props },
  ref
) {
  const isThinking = message.status === 'thinking';

  return (
    <Animated.View
      ref={ref}
      className={messageContainerStyle({
        role: 'assistant',
        class: className,
      })}
      {...props}
    >
      <View className="flex-row items-center gap-2">
        {isThinking && (
          <ActivityIndicator size="small" className="text-foreground" />
        )}
        <Text
          className={messageTextStyle({
            role: 'assistant',
            class: textClassName,
          })}
        >
          {message.content}
        </Text>
      </View>
    </Animated.View>
  );
});

AssistantMessage.displayName = 'AssistantMessage';
