import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Conversation } from '@/components/ui/chat-ai';
import { ConversationContent } from '@/components/ui/chat-ai';
import { Message } from '@/components/ui/chat-ai';
import { MessageContent } from '@/components/ui/chat-ai';
import { MessageResponse } from '@/components/ui/chat-ai';
import { MessageToolbar } from '@/components/ui/chat-ai';
import { MessageAction } from '@/components/ui/chat-ai';
import { PromptInput } from '@/components/ui/chat-ai';
import { PromptInputProvider } from '@/components/ui/chat-ai';
import { ConversationScrollButton } from '@/components/ui/chat-ai';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const [messages, setMessages] = React.useState([
    {
      id: '1',
      role: 'user',
      content: 'Hello, how can you help me today?',
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Hi! I can help you with various tasks including answering questions, writing code, analyzing data, and much more. What would you like to work on?',
    },
  ]);

  const renderMessage = ({ item: message, index }) => (
    <Message role={message.role} index={index} message={message}>
      <MessageContent>
        <MessageResponse message={message} />
      </MessageContent>
      <MessageToolbar>
        <MessageAction>
          <span>⋮</span>
        </MessageAction>
      </MessageToolbar>
    </Message>
  );

  const handleSubmit = ({ text }) => {
    if (!text.trim()) return;
    
    const newMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };
    
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="h-[500px] flex flex-col">
      <Conversation className="flex-1">
        <ConversationContent 
          messages={messages} 
          renderItem={renderMessage}
        />
        <ConversationScrollButton />
      </Conversation>
      <PromptInputProvider>
        <PromptInput onSubmit={handleSubmit} />
      </PromptInputProvider>
    </div>
  );
}`}
      argTypes={{}}
      reactLive={{ Conversation, ConversationContent, Message, MessageContent, MessageResponse, MessageToolbar, MessageAction, PromptInput, PromptInputProvider, ConversationScrollButton }}
      
    />
  );
}