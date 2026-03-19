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

  // 🔥 NEW: Track real dimensions on UI thread
  const contentHeight = useSharedValue(0);
  const viewportHeight = useSharedValue(0);

  // 🔥 Animated ref (for scrollTo)
  const listRef = useAnimatedRef<LegendListRef>();

  // 🔥 Trigger auto-scroll when new messages arrive
  // Small timeout ensures the list has finished laying out the new item
  useEffect(() => {
    if (messages.length === 0) return;

    const timeout = setTimeout(() => {
      scheduleOnUI(() => {
        'worklet';
        shouldScroll.value = 1;
      });
    }, 0); // 0ms = next tick (perfect for layout)

    return () => clearTimeout(timeout);
  }, [messages.length, loading]);

  // 🔥 UI thread scroll logic - now scrolls to EXACT bottom
  useAnimatedReaction(
    () => shouldScroll.value,
    (value) => {
      if (value === 1) {
        const targetY = Math.max(0, contentHeight.value - viewportHeight.value);

        scrollTo(listRef, 0, targetY, true); // true = animated

        shouldScroll.value = 0;
      }
    }
  );

  // 🔥 Track scroll position + update real dimensions
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const { contentOffset, contentSize, layoutMeasurement } = event;

      const bottomThreshold = 100;

      const atBottom =
        contentOffset.y + layoutMeasurement.height >=
        contentSize.height - bottomThreshold;

      isAtBottom.value = atBottom ? 1 : 0;

      // 🔥 Keep real height up-to-date
      contentHeight.value = contentSize.height;
      viewportHeight.value = layoutMeasurement.height;
    },
  });

  // 🔥 Keyboard animation (unchanged)
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
        // 🔥 These two are the magic - they give us the REAL list height
        onContentSizeChange={(width: number, height: number) => {
          contentHeight.value = height;
        }}
        onLayout={(event) => {
          viewportHeight.value = event.nativeEvent.layout.height;
        }}
        // User props come last so they can still override other things if needed
        {...props}
      />
    </Animated.View>
  );
});

ChatMessages.displayName = 'ChatMessages';
