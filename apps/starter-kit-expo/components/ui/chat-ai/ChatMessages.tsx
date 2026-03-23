import React, { useContext, useEffect, useState, useRef } from 'react';
import { LegendListProps, LegendListRef } from '@legendapp/list';
import { AnimatedLegendList } from '@legendapp/list/reanimated';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageComponent } from './ChatMessage';
import { ChatMessage as ChatMessageType } from './types';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import { useKeyboardAwareChat } from './useKeyboardAwareChat';
import { GestureDetector } from 'react-native-gesture-handler';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedReaction,
  useAnimatedRef,
  scrollTo,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import { Platform } from 'react-native';

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

  const { height,progress } = useReanimatedKeyboardAnimation();
  const {
  scrollHandler,
  inputStyle,
  listContentStyle,
  panGesture,
} = useKeyboardAwareChat();


  // Shared values
  const isAtBottom = useSharedValue(1);
  const shouldScroll = useSharedValue(0);

  const contentHeight = useSharedValue(0);
  const viewportHeight = useSharedValue(0);

  const listRef = useRef<LegendListRef>(null);

  const blankSize = context?.blankSize ?? useSharedValue(0);

  // React state for footer spacer


   useEffect(() => {
     if (messages.length === 0) return;

     const timeout = setTimeout(() => {
       listRef.current?.scrollToEnd({ animated: false });
     }, 50);

     return () => clearTimeout(timeout);
   }, [messages.length]);
  
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

const footerStyle = useAnimatedStyle(() => ({
  height: blankSize.value + height.value,
}));

  const contentContainerStyle = useAnimatedStyle(() => ({
    paddingBottom: blankSize.value + height.value, // direct from UI thread
  }));

  // const scrollHandler = useAnimatedScrollHandler({
  //   onScroll: (event) => {
  //     'worklet';

  //     const { contentOffset, contentSize, layoutMeasurement } = event;

  //     const bottomThreshold = 80;

  //     isAtBottom.value =
  //       contentOffset.y + layoutMeasurement.height >=
  //       contentSize.height - bottomThreshold
  //         ? 1
  //         : 0;

  //     contentHeight.value = contentSize.height;
  //     viewportHeight.value = layoutMeasurement.height;
  //   },
  // });

  const defaultRenderItem = ({
    item,
    index,
  }: {
    item: ChatMessageType;
    index: number;
  }) => <ChatMessageComponent message={item} index={index} />;

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View className="flex-1" style={listAnimatedStyle}>
        <AnimatedLegendList
          ref={listRef}
          data={messages}
          renderItem={renderItem || defaultRenderItem}
          keyboardDismissMode={
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
          keyboardShouldPersistTaps="handled"
          keyExtractor={(item: ChatMessageType) => item.id}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          onContentSizeChange={(_, h) => {
            contentHeight.value = h;
          }}
          onLayout={(event) => {
            viewportHeight.value = event.nativeEvent.layout.height;
          }}
          ListFooterComponent={<Animated.View style={footerStyle} />}
          {...props}
        />
      </Animated.View>
    </GestureDetector>
  );
});

ChatMessages.displayName = 'ChatMessages';
