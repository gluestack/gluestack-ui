'use client';
import React from 'react';
import { Chat } from './Chat';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { useChat } from './useChat';

interface ChatAiProps {
  api?: string;
  className?: string;
}

export const ChatAi: React.FC<ChatAiProps> = ({
  api = '/api/chat',
  className = 'flex-1',
}) => {
  const { messages, send, loading, error } = useChat({ api });

  return (
    <Chat
      messages={messages}
      loading={loading}
      error={error}
      onSend={send}
      className={className}
    >
      <ChatMessages className="flex-1 px-4" />
      <ChatInput />
    </Chat>
  );
};

ChatAi.displayName = 'ChatAi';
