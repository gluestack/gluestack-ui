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

interface AssistantMessageProps extends ViewProps {
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
  if (!context) throw new Error('AssistantMessage must be used inside Chat');

  const messages = context.messages ?? [];

  // Is this the newest assistant message? (including "Thinking..." stage)
  const isNewestAssistantMessage =
    message.role === 'assistant' && index === messages.length - 1;

  // Find the most recent user message index
  const lastUserIndex = messages.reduceRight(
    (acc, msg, i) => (acc === -1 && msg.role === 'user' ? i : acc),
    -1
  );

  // This assistant is paired with the latest user message
  const isPairedWithLatestUser =
    isNewestAssistantMessage &&
    lastUserIndex !== -1 &&
    index === lastUserIndex + 1;

  // Trigger user message animation (so we know when to fade in assistant)
  const { didUserMessageAnimate } = useFirstMessageAnimation({
    disabled: !isPairedWithLatestUser,
  });

  // Measure assistant height for blank size calculation
  const { ref: blankRef, onLayout } = useMessageBlankSize({
    role: 'assistant',
    disabled: !isNewestAssistantMessage,
  });

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: didUserMessageAnimate.value ? withTiming(1, { duration: 280 }) : 0,
  }));

  const isThinking = message.status === 'thinking';

  return (
    <Animated.View
      ref={(node) => {
        // Combine blankRef and forwarded ref safely
        if (typeof blankRef === 'function') blankRef(node);
        else if (blankRef) blankRef.current = node;

        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      onLayout={isNewestAssistantMessage ? onLayout : undefined}
      style={opacityStyle}
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
