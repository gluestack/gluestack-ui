import React from 'react';
import { Chat } from '@/components/ui/chat-ai';
import { ChatMessages } from '@/components/ui/chat-ai';
import { ChatInput } from '@/components/ui/chat-ai';
import { useChat } from '@/components/ui/chat-ai';

export default function Home() {
  const { messages, send, loading, error } = useChat({ api: '/api/chat' });

  return (
    <Chat
      messages={messages}
      loading={loading}
      error={error}
      onSend={send}
      className="flex-1"
    >
      <ChatMessages className="flex-1 px-4" />
      <ChatInput />
    </Chat>
  );
}
