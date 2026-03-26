// app/chat.tsx   (or wherever you render the chat)
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, UIMessage } from 'ai';
import { fetch as expoFetch } from 'expo/fetch'; // ← This is required for Expo

import {
  Conversation,
  ConversationContent,
  Message,
  MessageAction,
  MessageToolbar,
  MessageContent,
  MessageResponse,
  PromptInput,
} from '@/components/ui/chat-ai';
import { ConversationScrollButton } from '@/components/ui/chat-ai/conversation';
import { ListRenderItem, View } from 'react-native';
import { Text } from 'react-native';

export default function AIChat() {
  const { messages, status, sendMessage, error } = useChat({
    transport: new DefaultChatTransport({
      fetch: expoFetch as unknown as typeof globalThis.fetch, // ← Critical for React Native
      api: 'http://10.153.0.82:8081/api/chat', // or use generateAPIUrl('/api/chat') if you have a helper
    }),
    onError: (err) => console.error('Chat error:', err),
  });

  // Custom renderItem using your Message components
  const renderMessage: ListRenderItem<UIMessage> = ({ item: message }) => (

    <Message role={message.role}>
      <MessageContent role={message.role}>
        {message.parts
          ?.filter((part) => part.type === 'text')
          .map((part, i) => (
            <MessageResponse key={i}>{part.text}</MessageResponse>
          ))}
      </MessageContent>
      <MessageToolbar>
        <MessageAction onPress={() => {}}>
          <Text>Reply</Text>
        </MessageAction>
      </MessageToolbar>
    </Message>
  );
  return (
    <View className="flex-1 bg-slate-50 py-safe dark:bg-slate-950">
      <Conversation>
        <ConversationContent renderItem={renderMessage} messages={messages} />

        {error && (
          <Text className="p-4 text-red-500 text-center">
            Error: {error.message}
          </Text>
        )}

        {/* Optional: Show "AI is thinking..." */}
        {status === 'streaming' && (
          <Text className="px-4 py-2 text-slate-500">AI is thinking...</Text>
        )}
        <ConversationScrollButton />
      </Conversation>

      <PromptInput sendMessage={sendMessage} status={status} />
    </View>
  );
}
