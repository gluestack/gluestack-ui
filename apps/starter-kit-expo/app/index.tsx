import React from 'react';
import { Chat } from '@/components/ui/chat-ai';
import { ChatMessages } from '@/components/ui/chat-ai';
import { ChatInput } from '@/components/ui/chat-ai';
import { useChat } from '@/components/ui/chat-ai';
import { generateAPIUrl } from '../lib/utils';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home() {
  const { messages, send, loading, error } = useChat({
    api: 'http://10.153.0.82:8081/api/chat',
  });
console.log(messages);
  return (
 
      <Chat
        messages={messages}
        loading={loading}
        error={error}
        onSend={send}
        className="flex-1 py-safe px-4"
      >
        <ChatMessages className="flex-1 px-4 " />
        <ChatInput />
      </Chat>
   
  );
}
