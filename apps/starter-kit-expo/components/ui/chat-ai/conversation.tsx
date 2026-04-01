import React, {
  useRef,
  useCallback,
  useEffect,
  type ReactElement,
  ReactNode,
} from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import { useKeyboardAwareChat } from './useKeyboardAwareChat';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  type FlatListProps,
  type ListRenderItem,
  Platform,
} from 'react-native';
import { ArrowDown, Download, MessageSquare } from 'lucide-react-native';
import type { UIMessage } from 'ai';
import { Message, MessageContent, MessageResponse } from './message';
import { BlankProvider, useBlankContext } from './blank-context';

export type ConversationProps = React.PropsWithChildren<{ className?: string }>;
import { LegendListProps, LegendListRef } from '@legendapp/list'; 
import { AnimatedLegendList } from '@legendapp/list/reanimated';

// ==================== MAIN COMPONENTS ====================

export const Conversation = ({ children, className }: ConversationProps) => (
  <BlankProvider>
    <View className={`flex-1 bg-background ${className || ''}`}>
      {children}
    </View>
  </BlankProvider>
);

export type ConversationEmptyStateProps = {
  title?: string;
  description?: string;
  icon?: ReactElement;
  className?: string;
};

export const ConversationEmptyState = ({
  title = 'Start a conversation',
  description = 'Type a message below to begin chatting',
  icon,
  className,
}: ConversationEmptyStateProps) => (
  <View
    className={`flex-1 items-center justify-center px-10 py-12 ${className || ''}`}
  >
    {icon ?? <MessageSquare size={48} className="text-muted-foreground" />}
    <Text className="mt-4 text-xl font-semibold text-foreground">{title}</Text>
    <Text className="mt-2 text-center text-base text-muted-foreground">
      {description}
    </Text>
  </View>
);

export type ConversationContentProps = {
  messages: UIMessage[];
  renderItem?: ListRenderItem<UIMessage>;
  estimatedItemSize?: number;
} & Omit<FlatListProps<UIMessage>, 'data' | 'renderItem'>;

export const ConversationContent = ({
  messages,
  renderItem,
  estimatedItemSize = 140,
  ...flatListProps
}: ConversationContentProps) => {
  const flatListRef = useRef<FlatList<UIMessage>>(null);

  const defaultRenderItem: ListRenderItem<UIMessage> = useCallback(
    ({ item: message, index }) => (
      <Message role={message.role} index={index} message={message}>
        <MessageContent>
          {message.parts
            ?.filter((part) => part.type === 'text')
            .map((part, i) => (
              <MessageResponse key={i} message={message} />
            ))}
        </MessageContent>
      </Message>
    ),
    []
  );
  const { scrollHandler, panGesture } = useKeyboardAwareChat();
  const { blankSize } = useBlankContext();

  const prevLengthRef = useRef(messages.length);

  useEffect(() => {
    const shouldScroll =
      messages.length > prevLengthRef.current &&
      messages[messages.length - 1].role === 'user';

    if (shouldScroll) {
      flatListRef.current?.scrollToEnd();
    }
    prevLengthRef.current = messages.length;
  }, [messages]);
  const { messagesContainerHeight } = useBlankContext();
  return (
    <GestureDetector gesture={panGesture}>
      <View
        className="flex-1"
        onLayout={(e) => {
          const height = e.nativeEvent.layout.height;
          messagesContainerHeight.value = height;
        }}
      >
        <AnimatedLegendList
          ref={flatListRef}
          keyboardDismissMode={
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
          data={messages}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem || defaultRenderItem}
          keyExtractor={(item) => item.id}
          className="flex-1"
          contentContainerClassName="px-4 py-6 gap-6"
          scrollEventThrottle={16}
          estimatedItemSize={estimatedItemSize}
          removeClippedSubviews
          initialNumToRender={15}
          windowSize={10}
          onScroll={scrollHandler}
          maxToRenderPerBatch={10}
          {...flatListProps}
          ListEmptyComponent={
            messages.length === 0 ? <ConversationEmptyState /> : undefined
          }
          contentContainerStyle={{
            paddingBottom: blankSize.value,
          }}
        />
      </View>
    </GestureDetector>
  );
};

export const ConversationScrollButton = () => (
  <TouchableOpacity
    onPress={() => {}}
    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary h-11 w-11 items-center justify-center rounded-full shadow-lg"
  >
    <ArrowDown size={22} className="text-primary-foreground" />
  </TouchableOpacity>
);

export type ConversationDownloadProps = { messages: UIMessage[] };

export const ConversationDownload = ({
  messages,
}: ConversationDownloadProps) => {
  const handleDownload = useCallback(() => {
    const markdown = messages
      .map((msg) => {
        const role = msg.role === 'user' ? 'User' : 'Assistant';
        const text = msg.parts
          ?.filter((p) => p.type === 'text')
          .map((p) => p.text)
          .join('\n');
        return `**${role}:**\n${text}`;
      })
      .join('\n\n');
    Alert.alert('Download', `Markdown ready (${messages.length} messages)`);
  }, [messages]);

  return (
    <TouchableOpacity
      onPress={handleDownload}
      className="absolute top-4 right-4 bg-card p-3 rounded-2xl shadow-sm"
    >
      <Download size={20} className="text-muted-foreground" />
    </TouchableOpacity>
  );
};
