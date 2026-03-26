// components/ai-elements/conversation.tsx
import React, { useRef, useState, useCallback,useEffect, type ReactElement, createContext, ReactNode, useContext } from 'react';
import type { SharedValue } from 'react-native-reanimated';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  type FlatListProps,
  type ListRenderItem,
} from 'react-native';
import { ArrowDown, Download, MessageSquare } from 'lucide-react-native';
import type { UIMessage } from 'ai';
import { Message, MessageContent, MessageResponse } from './message';
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useBlank } from './useBlank';
export type ConversationProps = React.PropsWithChildren<{ className?: string }>;


type BlankContextType = {
  blankSize: SharedValue<number>;
  userMessageHeight: SharedValue<number>;
  assistantMessageHeight: SharedValue<number>;
};

const BlankContext = createContext<BlankContextType | null>(null);

export const BlankProvider = ({ children }: { children: ReactNode }) => {
  const blankSize = useSharedValue(0); // ← created ONLY ONCE
  const userMessageHeight = useSharedValue(0);
  const assistantMessageHeight = useSharedValue(0);
  return (
    <BlankContext.Provider value={{ blankSize, userMessageHeight, assistantMessageHeight }}>
      {children}
    </BlankContext.Provider>
  );
};

export const useBlankContext = () => {
  const context = useContext(BlankContext);
  if (!context)
    throw new Error('useBlankContext must be used inside BlankProvider');
  return context;
};

export const Conversation = ({ children, className }: ConversationProps) => (
  <BlankProvider>
    <View className={`flex-1 bg-slate-50 dark:bg-slate-950 ${className || ''}`}>
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
  icon = <MessageSquare size={48} color="#64748b" />,
  className,
}: ConversationEmptyStateProps) => (
  <View
    className={`flex-1 items-center justify-center px-10 py-12 ${className || ''}`}
  >
    {icon}
    <Text className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
      {title}
    </Text>
    <Text className="mt-2 text-center text-base text-slate-500 dark:text-slate-400">
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
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollToBottom = useCallback(() => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }, []);

  const onScroll = useCallback((e: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    setIsAtBottom(distanceFromBottom < 60);
  }, []);

  const onContentSizeChange = useCallback(() => {
    if (isAtBottom) scrollToBottom();
  }, [isAtBottom, scrollToBottom]);

  const defaultRenderItem: ListRenderItem<UIMessage> = useCallback(
    ({ item: message }) => (
      <Message role={message.role}>
        <MessageContent>
          {message.parts
            ?.filter((part) => part.type === 'text')
            .map((part, i) => (
              <MessageResponse key={i}>{part.text}</MessageResponse>
            ))}
        </MessageContent>
      </Message>
    ),
    []
  );

const { blankSize } = useBlankContext();
console.log('blankSize', blankSize.value);
 const animatedProps = useAnimatedProps(() => {
   return {
     contentInset: {
       bottom: blankSize.value
     },
   };
 });
 const animatedStyle = useAnimatedStyle(() => ({
  height: blankSize.value,
 }));
 useEffect(() => {
  flatListRef.current?.scrollToEnd();
 }, [messages]);
  return (
    <Animated.FlatList
      ref={flatListRef}
      data={messages}
      renderItem={renderItem || defaultRenderItem}
      keyExtractor={(item) => item.id}
  
      className="flex-1"
      contentContainerClassName="px-4 py-6 gap-6"
      onScroll={onScroll}
      onContentSizeChange={onContentSizeChange}
      scrollEventThrottle={16}
      estimatedItemSize={estimatedItemSize}
      removeClippedSubviews
      initialNumToRender={15}
      windowSize={10}
      maxToRenderPerBatch={10}
      {...flatListProps}
      ListEmptyComponent={
        messages.length === 0 ? <ConversationEmptyState /> : undefined
      }
     ListFooterComponent={<Animated.View style={[animatedStyle]} />}
    
    />
  );
};

export const ConversationScrollButton = () => (
  <TouchableOpacity
    onPress={() => {}} // You can connect this to flatListRef if needed
    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 h-11 w-11 items-center justify-center rounded-full shadow-lg"
  >
    <ArrowDown size={22} color="#fff" />
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
      className="absolute top-4 right-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm"
    >
      <Download size={20} color="#64748b" />
    </TouchableOpacity>
  );
};
