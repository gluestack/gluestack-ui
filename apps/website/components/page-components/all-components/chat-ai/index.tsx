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
import { PromptInputFooter } from '@/components/ui/chat-ai';
import { PromptInputTools } from '@/components/ui/chat-ai';
import { PromptInputActionMenu } from '@/components/ui/chat-ai';
import { PromptInputActionMenuContent } from '@/components/ui/chat-ai';
import { PromptInputActionMenuTrigger } from '@/components/ui/chat-ai';
import { PromptInputSubmit } from '@/components/ui/chat-ai';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { memo } from 'react';
import { CopyCheck } from 'lucide-react-native';
import { Menu } from 'lucide-react-native';
import { Option } from 'lucide-react-native';
import { Share } from 'lucide-react-native';
import { Attachment } from '@/components/ui/chat-ai';
import { AttachmentPreview } from '@/components/ui/chat-ai';
import { AttachmentRemove } from '@/components/ui/chat-ai';
import { Attachments } from '@/components/ui/chat-ai';
import { usePromptInputAttachments } from '@/components/ui/chat-ai';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const [messages, setMessages] = React.useState([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I can help you with various tasks. What would you like to work on today?',
    },
  ]);

  // ================= ATTACHMENT ITEM =================
  const AttachmentItem = memo(({ attachment, onRemove }: any) => {
    const handleRemove = React.useCallback(
      () => onRemove(attachment.id),
      [onRemove, attachment.id]
    );

    return (
      <Attachment data={attachment} onRemove={handleRemove}>
        <AttachmentPreview />
        <AttachmentRemove />
      </Attachment>
    );
  });

  // ================= ATTACHMENTS DISPLAY =================
  const PromptInputAttachmentsDisplay = () => {
    const attachments = usePromptInputAttachments();

    if (attachments.files.length === 0) return null;

    return (
      <Attachments variant="grid" className="mb-4">
        {attachments.files.map((attachment: any) => (
          <AttachmentItem
            key={attachment.id}
            attachment={attachment}
            onRemove={attachments.remove}
          />
        ))}
      </Attachments>
    );
  };

  const renderMessage: ListRenderItem<UIMessage> = ({ item: message, index }) => (
    <Message role={message.role} index={index} message={message}>
      <MessageContent>
        <MessageResponse message={message} />
      </MessageContent>

      {message.role === 'assistant' && (
        <MessageToolbar className="mt-[2px]">
          <MessageAction>
            <Menu strokeWidth={1} size={18} color="white" />
          </MessageAction>
          <MessageAction>
            <Share strokeWidth={1} size={18} color="white" />
          </MessageAction>
          <MessageAction>
            <CopyCheck strokeWidth={1} size={18} color="white" />
          </MessageAction>
        </MessageToolbar>
      )}
    </Message>
  );

  // ================= HANDLE SUBMIT WITH FAKE AI RESPONSE =================
  const handleSubmit = ({ text }: { text: string }) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: text,
    };

  
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const aiReply = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: "Hello! . This is a fake generated response. In a real app, this would come from Grok, GPT, or any AI model using Vercel AI SDK.",
      }

      setMessages((prev) => [...prev, aiReply]);
    }, 800)
  };

  return (
    <Box className="h-[600px] web:pb-5 bg-background">
      <Conversation className="flex-1">
        <ConversationContent 
          messages={messages} 
          renderItem={renderMessage}
        />
        <ConversationScrollButton />
      </Conversation>
      
      <PromptInputProvider>
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputAttachmentsDisplay />
          <PromptInputBody>
            <PromptInputTextarea />
          </PromptInputBody>

          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuContent
                  trigger={(props: any) => (
                    <PromptInputActionMenuTrigger {...props} className="px-3">
                      <Text className="text-3xl text-primary">+</Text>
                    </PromptInputActionMenuTrigger>
                  )}
                />
              </PromptInputActionMenu>

              <TouchableOpacity>
                <View className="h-10 px-3 rounded-full items-center justify-center bg-primary/10">
                  <Text className="text-xl text-primary">Model</Text>
                </View>
              </TouchableOpacity>
            </PromptInputTools>

            <PromptInputSubmit />
          </PromptInputFooter>
        </PromptInput>
      </PromptInputProvider>
    </Box>
  );
}`}
      argTypes={{}}
      reactLive={{ Conversation, ConversationContent, Message, MessageContent, MessageResponse, MessageToolbar, MessageAction, PromptInput, PromptInputProvider, PromptInputBody, PromptInputTextarea, ConversationScrollButton, Box, PromptInputFooter, PromptInputTools, PromptInputActionMenu, PromptInputActionMenuContent, PromptInputActionMenuTrigger, PromptInputSubmit, TouchableOpacity, View, Text, memo, CopyCheck, Menu, Option, Share, Attachment, AttachmentPreview, AttachmentRemove, Attachments, usePromptInputAttachments }}
      
    />
  );
}