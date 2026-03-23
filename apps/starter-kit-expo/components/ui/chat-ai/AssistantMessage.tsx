'use client';

import React, { useContext } from 'react';
import { View, ViewProps, Text, ActivityIndicator } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageType } from './types';
import { useMessageBlankSize } from './useMessageBlankSize';

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
  const context = useContext(ChatContext);
  const messages = context?.messages ?? [];

  const isNewestAssistantMessage =
    message.role === 'assistant' && index === messages.length - 1;

  const { ref: blankRef, onLayout } = useMessageBlankSize({
    role: 'assistant',
    disabled: !isNewestAssistantMessage,
  });

  const style = useAnimatedStyle(() => {
    if (!isNewestAssistantMessage) {
      return { opacity: 1 };
    }

    // Vercel exact pattern: fade in only after user message animation finishes
    return {
      opacity: context?.didUserMessageAnimate.value
        ? withTiming(1, { duration: 350 })
        : 0,
    };
  });

  const isThinking = message.status === 'thinking';

  return (
    <Animated.View
      ref={blankRef}
      onLayout={isNewestAssistantMessage ? onLayout : undefined}
      style={style}
      className={messageContainerStyle({
        role: 'assistant',
        class: className,
      })}
      {...props}
    >
      <View className="flex-row items-center gap-2">
        {isThinking ? <ActivityIndicator size="small" /> : null}
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
