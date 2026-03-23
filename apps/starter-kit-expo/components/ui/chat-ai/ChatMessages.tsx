'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Platform } from 'react-native';
import { LegendListProps, LegendListRef } from '@legendapp/list';
import { AnimatedLegendList } from '@legendapp/list/reanimated';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageType } from './types';
import { ChatMessage as ChatMessageComponent } from './ChatMessage';
import { useKeyboardAwareChat } from './useKeyboardAwareChat';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import { GestureDetector } from 'react-native-gesture-handler';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
} from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

interface ChatMessagesProps extends Omit<
  LegendListProps<ChatMessageType>,
  'data' | 'renderItem'
> {
  renderItem?: (info: {
    item: ChatMessageType;
    index: number;
  }) => React.ReactElement;
}

export const ChatMessages = React.forwardRef<
  React.ComponentRef<typeof AnimatedLegendList>,
  ChatMessagesProps
>(function ChatMessages({ renderItem, ...props }, ref) {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('ChatMessages must be used within a Chat component');
  }

  const { messages } = context;

  const { height } = useReanimatedKeyboardAnimation();
  const { scrollHandler, panGesture } = useKeyboardAwareChat();

  const listRef = useRef<LegendListRef>(null);

  const blankSize = context?.blankSize ?? useSharedValue(0);
  const [blankSizeValue, setBlankSizeValue] = useState(0);
  useAnimatedReaction(
    () => blankSize.value,
    (value) => {
      runOnJS(() => {
        setBlankSizeValue(value);
      });
    }
  );

  // 🔥 scroll to bottom (NO animation → Vercel style)
  useEffect(() => {
    if (messages.length === 0) return;

    const t = setTimeout(() => {
      listRef.current?.scrollToEnd({ animated: false });
    }, 30);

    return () => clearTimeout(t);
  }, [messages.length]);

  // 🔥 footer = blank space + keyboard
  const footerStyle = useAnimatedStyle(() => {
    return {
      height: blankSize.value + height.value,
    };
  });

  const defaultRenderItem = ({
    item,
    index,
  }: {
    item: ChatMessageType;
    index: number;
  }) => <ChatMessageComponent message={item} index={index} />;

  return (
    <GestureDetector gesture={panGesture}>
      <View style={{ flex: 1 }}>
        <AnimatedLegendList
          ref={listRef}
          data={messages}
          renderItem={renderItem || defaultRenderItem}
          keyExtractor={(item) => item.id}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: blankSizeValue }}
          keyboardDismissMode={
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
          keyboardShouldPersistTaps="handled"
          {...props}
        />
      </View>
    </GestureDetector>
  );
});

ChatMessages.displayName = 'ChatMessages';
