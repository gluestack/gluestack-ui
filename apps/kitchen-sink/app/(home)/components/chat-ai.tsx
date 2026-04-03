import { Conversation, ConversationContent, Message, MessageContent, MessageResponse, MessageToolbar, MessageAction, PromptInput, PromptInputProvider, PromptInputBody, PromptInputTextarea, ConversationScrollButton, Attachments, Attachment, AttachmentPreview, AttachmentRemove, usePromptInputAttachments } from '@/components/ui/chat-ai'
import { Box } from '@/components/ui/box'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
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
  )
};

const ExampleBasic = () => {
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
  )
};

const ExampleWithAttachments = () => {
const [messages, setMessages] = React.useState([
    {
      id: '1',
      role: 'user',
      content: 'Here is the document you requested',
    },
  ]);

  const AttachmentItem = ({ attachment, onRemove }) => {
    return (
      <Attachment data={attachment} onRemove={() => onRemove(attachment.id)}>
        <AttachmentPreview />
        <AttachmentRemove />
      </Attachment>
    );
  };

  const PromptInputAttachmentsDisplay = () => {
    const attachments = usePromptInputAttachments();

    if (attachments.files.length === 0) return null;

    return (
      <Attachments variant="grid" className="mb-4">
        {attachments.files.map((attachment) => (
          <AttachmentItem
            key={attachment.id}
            attachment={attachment}
            onRemove={attachments.remove}
          />
        ))}
      </Attachments>
    );
  };

  const renderMessage = ({ item: message, index }) => (
    <Message role={message.role} index={index} message={message}>
      <MessageContent>
        <MessageResponse message={message} />
      </MessageContent>
    </Message>
  );

  const handleSubmit = ({ text, files }) => {
    if (!text.trim() && files.length === 0) return;
    
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
      </Conversation>
      <PromptInputProvider>
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputAttachmentsDisplay />
        </PromptInput>
      </PromptInputProvider>
    </div>
  )
};

const ExampleCustomStyling = () => {
const [messages, setMessages] = React.useState([
    {
      id: '1',
      role: 'user',
      content: 'Can you help me style this component?',
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Absolutely! You can customize the chat interface using Tailwind CSS classes. Each component accepts a className prop for styling.',
    },
  ]);

  const renderMessage = ({ item: message, index }) => (
    <Message role={message.role} index={index} message={message}>
      <MessageContent className={message.role === 'user' ? 'bg-blue-600' : 'bg-slate-200'}>
        <MessageResponse message={message} />
      </MessageContent>
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
    <div className="h-[500px] flex flex-col rounded-lg overflow-hidden border border-border">
      <div className="bg-primary p-4">
        <h3 className="text-primary-foreground font-semibold">Custom Chat</h3>
      </div>
      <Conversation className="flex-1">
        <ConversationContent 
          messages={messages} 
          renderItem={renderMessage}
        />
      </Conversation>
      <PromptInputProvider>
        <PromptInput 
          onSubmit={handleSubmit}
          className="border-t-2 border-primary"
        />
      </PromptInputProvider>
    </div>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "with-attachments",
    label: "With Attachments",
    content: <ExampleWithAttachments />,
  },
  {
    value: "custom-styling",
    label: "Custom Styling",
    content: <ExampleCustomStyling />,
  }
];

export default function ChatAiScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}