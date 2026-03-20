import React, { useContext, useEffect, useState } from 'react';
import { LegendListProps, LegendListRef } from '@legendapp/list';
import { AnimatedLegendList } from '@legendapp/list/reanimated';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageComponent } from './ChatMessage';
import { ChatMessage as ChatMessageType } from './types';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedReaction,
  useAnimatedRef,
  scrollTo,
  runOnJS,
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

  const { height } = useReanimatedKeyboardAnimation();

  // Shared values
  const isAtBottom = useSharedValue(1);
  const shouldScroll = useSharedValue(0);

  const contentHeight = useSharedValue(0);
  const viewportHeight = useSharedValue(0);

  const listRef = useAnimatedRef<LegendListRef>();

  const blankSize = context?.blankSize ?? useSharedValue(0);

  // React state for footer spacer
  const [bottomInset, setBottomInset] = useState(0);
console.log(bottomInset);
  // Auto-scroll when new messages arrive
  useEffect(() => {
    if (messages.length === 0||!loading) return;

    const timeout = setTimeout(() => {
      shouldScroll.value = 1;
    }, 50);

    return () => clearTimeout(timeout);
  }, [messages.length, loading]);

  // Scroll to bottom (UI thread)
  useAnimatedReaction(
    () => shouldScroll.value,
    (value) => {
      if (value === 1) {
        const targetY = Math.max(0, contentHeight.value - viewportHeight.value);
        scrollTo(listRef, 0, targetY, true);
        shouldScroll.value = 0;
      }
    }
  );

  // Sync keyboard + blank space to React
  useAnimatedReaction(
    () => blankSize.value + height.value,
    (val, prev) => {
      if (val !== prev) {
        runOnJS(setBottomInset)(val);
      }
    }
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      'worklet';

      const { contentOffset, contentSize, layoutMeasurement } = event;

      const bottomThreshold = 80;

      isAtBottom.value =
        contentOffset.y + layoutMeasurement.height >=
        contentSize.height - bottomThreshold
          ? 1
          : 0;

      contentHeight.value = contentSize.height;
      viewportHeight.value = layoutMeasurement.height;
    },
  });

  const defaultRenderItem = ({
    item,
    index,
  }: {
    item: ChatMessageType;
    index: number;
  }) => <ChatMessageComponent message={item} index={index} />;

  return (
    <Animated.View style={{ flex: 1 }}>
      <AnimatedLegendList
        ref={listRef}
        data={messages}
        renderItem={renderItem || defaultRenderItem}
        keyExtractor={(item: ChatMessageType) => item.id}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        onContentSizeChange={(_, h) => {
          contentHeight.value = h;
        }}
        onLayout={(event) => {
          viewportHeight.value = event.nativeEvent.layout.height;
        }}
        // ✅ BEST APPROACH (footer spacer)
        ListFooterComponent={<Animated.View style={{ height: bottomInset}} />}
        {...props}
      />
    </Animated.View>
  );
});

ChatMessages.displayName = 'ChatMessages';
