import React, { useContext, useEffect } from 'react';
import { runOnUISync, scheduleOnUI } from 'react-native-worklets';
import { LegendListProps, LegendListRef } from '@legendapp/list';
import { AnimatedLegendList } from '@legendapp/list/reanimated';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageComponent } from './ChatMessage';
import { ChatMessage as ChatMessageType } from './types';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';

import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedReaction,
  useAnimatedRef,
  scrollTo,
} from 'react-native-reanimated';

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

  const { messages, loading } = context;

  const { height, progress } = useReanimatedKeyboardAnimation();

  // 🔥 Shared values
  const isAtBottom = useSharedValue(1);
  const shouldScroll = useSharedValue(0);

  // 🔥 Animated ref (IMPORTANT for scrollTo)
  const listRef = useAnimatedRef<LegendListRef>();

  // 🔥 Trigger from React → UI
  useEffect(() => {
    if (messages.length === 0) return;

    // run on UI thread
    scheduleOnUI(() => {
      'worklet'; // ← Required in v4 for inline functions
      shouldScroll.value = 1;
    });
  }, [messages.length, loading]);

  // 🔥 UI thread scroll logic
  useAnimatedReaction(
    () => shouldScroll.value,
    (value) => {
      if (value === 1) {
        scrollTo(listRef, 0, 999999, true);

        shouldScroll.value = 0;
      }
    }
  );

  // 🔥 Track scroll position
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

  // 🔥 Keyboard animation
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
    <Animated.View className="flex-1" style={listAnimatedStyle}>
      <AnimatedLegendList
        ref={listRef}
        data={messages}
        renderItem={renderItem || defaultRenderItem}
        keyExtractor={(item: ChatMessageType) => item.id}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        {...props}
      />
    </Animated.View>
  );
});

ChatMessages.displayName = 'ChatMessages';
