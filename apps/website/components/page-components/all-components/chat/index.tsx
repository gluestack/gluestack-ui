import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { ChatScrollView } from '@/components/ui/chat';
import { ChatBubble } from '@/components/ui/chat';
import { ChatBubbleAvatar } from '@/components/ui/chat';
import { ChatBubbleAvatarFallback } from '@/components/ui/chat';
import { ChatBubbleContent } from '@/components/ui/chat';
import { ChatBubbleMessage } from '@/components/ui/chat';
import { ChatBubbleTimestamp } from '@/components/ui/chat';
import { ChatInput } from '@/components/ui/chat';
import { ChatInputField } from '@/components/ui/chat';
import { ChatInputSend } from '@/components/ui/chat';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
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
  );
}`}
      argTypes={{}}
      reactLive={{ ChatScrollView, ChatBubble, ChatBubbleAvatar, ChatBubbleAvatarFallback, ChatBubbleContent, ChatBubbleMessage, ChatBubbleTimestamp, ChatInput, ChatInputField, ChatInputSend, Text, Box }}
      
    />
  );
}