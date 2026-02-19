import { ChatScrollView, ChatBubble, ChatBubbleAvatar, ChatBubbleAvatarFallback, ChatBubbleContent, ChatBubbleMessage, ChatBubbleTimestamp, ChatInput, ChatInputField, ChatInputSend, ChatTypingIndicator, ChatMessageList } from '@/components/ui/chat'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'
import { View } from 'react-native'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<{ id: string; role: 'sent' | 'received'; content: string; time: string }[]>([
    { id: '1', role: 'received', content: 'Hey! How can I help you today?', time: '9:41 AM' },
    { id: '2', role: 'sent', content: 'Can you explain how React hooks work?', time: '9:42 AM' },
    { id: '3', role: 'received', content: 'Sure! React hooks let you use state and other React features in function components. useState manages local state, useEffect handles side effects, and useContext reads context values.', time: '9:42 AM' },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { id: String(Date.now()), role: 'sent', content: input.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
    setInput('');
  };

  return (
    <Box className="flex-1 bg-background h-[500px]">
      <ChatScrollView>
        {messages.map(msg => (
          <ChatBubble key={msg.id} variant={msg.role}>
            {msg.role === 'received' && (
              <ChatBubbleAvatar>
                <ChatBubbleAvatarFallback>AI</ChatBubbleAvatarFallback>
              </ChatBubbleAvatar>
            )}
            <ChatBubbleContent>
              <ChatBubbleMessage>{msg.content}</ChatBubbleMessage>
              <ChatBubbleTimestamp>{msg.time}</ChatBubbleTimestamp>
            </ChatBubbleContent>
          </ChatBubble>
        ))}
      </ChatScrollView>
      <ChatInput>
        <ChatInputField
          placeholder="Message..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSend}
        />
        <ChatInputSend onPress={handleSend}>
          <Text className="text-primary-foreground font-bold text-base">↑</Text>
        </ChatInputSend>
      </ChatInput>
    </Box>
  )
};

const ExampleWithTypingIndicator = () => {
const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [messages, setMessages] = React.useState<{ id: string; role: 'sent' | 'received'; content: string }[]>([
    { id: '1', role: 'received', content: 'Hello! Ask me anything.' },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: { id: string; role: 'sent' | 'received'; content: string } = { id: String(Date.now()), role: 'sent', content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { id: String(Date.now() + 1), role: 'received', content: 'Thanks for your message! I\'m processing your request...' },
      ]);
    }, 2000);
  };

  return (
    <View className="flex-1 bg-background h-[500px]">
      <ChatScrollView>
        {messages.map(msg => (
          <ChatBubble key={msg.id} variant={msg.role}>
            {msg.role === 'received' && (
              <ChatBubbleAvatar>
                <ChatBubbleAvatarFallback>AI</ChatBubbleAvatarFallback>
              </ChatBubbleAvatar>
            )}
            <ChatBubbleContent>
              <ChatBubbleMessage>{msg.content}</ChatBubbleMessage>
            </ChatBubbleContent>
          </ChatBubble>
        ))}
        {isTyping && (
          <ChatBubble variant="received">
            <ChatBubbleAvatar>
              <ChatBubbleAvatarFallback>AI</ChatBubbleAvatarFallback>
            </ChatBubbleAvatar>
            <ChatBubbleContent>
              <ChatTypingIndicator />
            </ChatBubbleContent>
          </ChatBubble>
        )}
      </ChatScrollView>
      <ChatInput>
        <ChatInputField
          placeholder="Ask AI anything..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSend}
        />
        <ChatInputSend onPress={handleSend} disabled={isTyping}>
          <Text className="text-primary-foreground font-bold text-base">↑</Text>
        </ChatInputSend>
      </ChatInput>
    </View>
  )
};

const ExampleWithVercelAISDK = () => {
// Install: npx expo install ai @ai-sdk/react @ai-sdk/openai
  // Add API route at app/api/chat+api.ts and replace the state below with:
  // const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: '/api/chat' });

  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { id: '1', role: 'assistant', content: "Hello! I'm your AI assistant. How can I help?" },
  ]);

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return;
    const userContent = input.trim();
    setMessages(prev => [...prev, { id: String(Date.now()), role: 'user', content: userContent }]);
    setInput('');
    setIsLoading(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: String(Date.now() + 1), role: 'assistant', content: 'This is a simulated response. Wire up useChat() from the Vercel AI SDK for real streaming.' },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <View className="flex-1 bg-background h-[500px]">
      <ChatMessageList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble variant={item.role === 'user' ? 'sent' : 'received'}>
            {item.role === 'assistant' && (
              <ChatBubbleAvatar>
                <ChatBubbleAvatarFallback>AI</ChatBubbleAvatarFallback>
              </ChatBubbleAvatar>
            )}
            <ChatBubbleContent>
              <ChatBubbleMessage>{item.content}</ChatBubbleMessage>
            </ChatBubbleContent>
          </ChatBubble>
        )}
        ListFooterComponent={
          isLoading ? (
            <ChatBubble variant="received">
              <ChatBubbleAvatar>
                <ChatBubbleAvatarFallback>AI</ChatBubbleAvatarFallback>
              </ChatBubbleAvatar>
              <ChatBubbleContent>
                <ChatTypingIndicator />
              </ChatBubbleContent>
            </ChatBubble>
          ) : null
        }
      />
      <ChatInput>
        <ChatInputField
          placeholder="Ask AI..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSubmit}
        />
        <ChatInputSend onPress={handleSubmit} disabled={isLoading}>
          <Text className="text-primary-foreground font-bold text-base">↑</Text>
        </ChatInputSend>
      </ChatInput>
    </View>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "with-typing-indicator",
    label: "With Typing Indicator",
    content: <ExampleWithTypingIndicator />,
  },
  {
    value: "with-vercel-ai-sdk",
    label: "With Vercel AI SDK",
    content: <ExampleWithVercelAISDK />,
  }
];

export default function ChatScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}