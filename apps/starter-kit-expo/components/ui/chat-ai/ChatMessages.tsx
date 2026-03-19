'use client';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import {  LegendListProps, LegendListRef } from '@legendapp/list';
import { AnimatedLegendList } from '@legendapp/list/reanimated';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageComponent } from './ChatMessage';
import { ChatMessage as ChatMessageType } from './types';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

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
  React.ComponentRef<typeof LegendList>,
  ChatMessagesProps
>(function ChatMessages({ renderItem, ...props }, ref) {
  const context = useContext(ChatContext);
console.log("this is the context", context)
  if (!context) {
    throw new Error('ChatMessages must be used within a Chat component');
  }

  const { messages,loading } = context;
  const { height, progress } = useReanimatedKeyboardAnimation();
  const isAtBottom = useSharedValue(1);
  const listRef = useRef<LegendListRef>(null);

  const scrollToBottom = useCallback(() => {
    if (listRef.current) {
      console.log('scroll t bottom is called');
      listRef.current.scrollToEnd({ animated: true });
    }
  }, [loading]);

 useEffect(() => {
   // Scroll to bottom only when AI finished responding
   if (loading) {
    console.log("this is the messages")
     scrollToBottom();
   }
 }, [loading, messages.length, scrollToBottom]);
  // Reanimated scroll handler - runs on UI thread
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const { contentOffset, contentSize, layoutMeasurement } = event;
      const bottomThreshold = 100;
      const atBottom =
        contentOffset.y + layoutMeasurement.height >=
        contentSize.height - bottomThreshold;
      isAtBottom.value = atBottom ? 1 : 0;
    },
  });
  const listAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [0, isAtBottom.value * height.value]
          ),
        },
      ],
    };
  });



  const defaultRenderItem = ({
    item,
  }: {
    item: ChatMessageType;
    index: number;
  }) => <ChatMessageComponent message={item} />;

  return (
    <Animated.View className="flex-1" style={[listAnimatedStyle]}>
      <AnimatedLegendList
        ref={listRef}
        data={messages}
        renderItem={renderItem || defaultRenderItem}
        keyExtractor={(item: ChatMessageType) => item.id}
        onScroll={scrollHandler}
        {...props}
      />
    </Animated.View>
  );
});

ChatMessages.displayName = 'ChatMessages';
