'use client';
import React, { useContext } from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import { ChatContext } from './context';
import { ChatMessage as ChatMessageComponent } from './ChatMessage';
import { ChatMessage as ChatMessageType } from './types';

interface ChatMessagesProps extends Omit<
  FlatListProps<ChatMessageType>,
  'data' | 'renderItem'
> {
  renderItem?: (info: {
    item: ChatMessageType;
    index: number;
  }) => React.ReactElement;
}

export const ChatMessages = React.forwardRef<
  React.ComponentRef<typeof FlatList>,
  ChatMessagesProps
>(function ChatMessages({ renderItem, ...props }, ref) {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('ChatMessages must be used within a Chat component');
  }

  const { messages } = context;

  const defaultRenderItem = ({
    item,
  }: {
    item: ChatMessageType;
    index: number;
  }) => <ChatMessageComponent message={item} />;

  return (
    <FlatList
      ref={ref}
      data={messages}
      renderItem={renderItem || defaultRenderItem}
      keyExtractor={(item: ChatMessageType) => item.id}
      {...props}
    />
  );
});

ChatMessages.displayName = 'ChatMessages';
