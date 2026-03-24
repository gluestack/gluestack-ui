'use client';

import React, { useContext } from 'react';
import { View, ViewProps, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageType } from './types';
import { useFirstMessageAnimation } from './useFirstMessageAnimation';
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
  if (!context) throw new Error('UserMessage must be used inside Chat');

  const messages = context.messages ?? [];

  const isNewestUserMessage =
    message.role === 'user' &&
    index === messages.findLastIndex((m) => m.role === 'user');

  // Animation Hook
  const {
    style: animationStyle,
    ref: animRef,
    onLayout: animOnLayout,
  } = useFirstMessageAnimation({
    disabled: !isNewestUserMessage,
  });

  // Blank Size Measurement Hook
  const { ref: blankRef, onLayout: blankOnLayout } = useMessageBlankSize({
    role: 'user',
    disabled: !isNewestUserMessage,
  });

  return (
    <Animated.View
      ref={(node) => {
        // Combine animation ref
        if (typeof animRef === 'function') animRef(node);
        else if (animRef) animRef.current = node;

        // Combine blank measurement ref
        if (typeof blankRef === 'function') blankRef(node);
        else if (blankRef) blankRef.current = node;

        // Forwarded ref from parent
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      onLayout={
        isNewestUserMessage
          ? (event) => {
              animOnLayout?.(event);
              blankOnLayout?.(event);
            }
          : undefined
      }
      style={animationStyle}
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
