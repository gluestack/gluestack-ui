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
import { PromptInputBody } from '@/components/ui/chat-ai';
import { PromptInputTextarea } from '@/components/ui/chat-ai';
import { ConversationScrollButton } from '@/components/ui/chat-ai';
import { Box } from '@/components/ui/box';

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
    <Box className="h-[600px] web:pb-5 bg-background" >
      <Conversation className="flex-1">
        <ConversationContent 
          messages={messages} 
          renderItem={renderMessage}
        />
        <ConversationScrollButton />
      </Conversation>
      
      <PromptInputProvider>
        <PromptInput onSubmit={handleSubmit} >
           <PromptInputBody className="bg-blue-500">
            <PromptInputTextarea />
          </PromptInputBody>
        </PromptInput>
      </PromptInputProvider>
    </Box>
  );
}`}
      argTypes={{}}
      reactLive={{ Conversation, ConversationContent, Message, MessageContent, MessageResponse, MessageToolbar, MessageAction, PromptInput, PromptInputProvider, PromptInputBody, PromptInputTextarea, ConversationScrollButton, Box }}
      
    />
  );
}