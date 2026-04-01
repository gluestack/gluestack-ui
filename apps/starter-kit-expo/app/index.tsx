import { useChat } from '@ai-sdk/react';

import {
  Attachment,
  AttachmentPreview,
  AttachmentRemove,
  Attachments,
} from '@/components/ui/chat-ai/attatchments';

import { DefaultChatTransport, UIMessage } from 'ai';
import { fetch as expoFetch } from 'expo/fetch'; // ← This is required for Expo
import { configureReanimatedLogger } from 'react-native-reanimated';

configureReanimatedLogger({
  strict: false,
});
import {
  Conversation,
  ConversationContent,
  Message,
  MessageAction,
  MessageToolbar,
  MessageContent,
  MessageResponse,
} from '@/components/ui/chat-ai';
import { ConversationScrollButton } from '@/components/ui/chat-ai/conversation';
import { ListRenderItem } from 'react-native';
import { Text } from 'react-native';
import { CopyCheck } from 'lucide-react-native';
import {
  PromptInput,
  PromptInputProvider,
  usePromptInputAttachments,
  PromptInputMessage,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputBody,
  PromptInputTools,
  PromptInputButton,
  PromptInputTextarea,
  PromptInputSubmit,
  PromptInputActionMenuTrigger,
} from '@/components/ui/chat-ai/prompt-input';

import { memo, useCallback } from 'react';
import { View } from 'react-native';

// ================= ATTACHMENT ITEM =================
const AttachmentItem = memo(({ attachment, onRemove }: any) => {
  const handleRemove = useCallback(
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

    <MessageToolbar>
      <MessageAction>
        <CopyCheck strokeWidth={1} size={20} color="white" />
      </MessageAction>
    </MessageToolbar>
  </Message>
);

// ================= EXAMPLE =================
const Example = () => {
  const { messages, status, sendMessage, error } = useChat({
    transport: new DefaultChatTransport({
      fetch: expoFetch as unknown as typeof globalThis.fetch, // ← Critical for React Native
      api: 'http://10.153.0.82:8081/api/chat', // or use generateAPIUrl('/api/chat') if you have a helper
    }),
    onError: (err) => console.error('Chat error:', err),
  });
  const handleSubmit = useCallback(
    (message: PromptInputMessage) => {
      sendMessage({
        text: message.text, // 👈 important
        files: message.files,
      });
    },
    [sendMessage]
  );

  return (
    <View className="flex-1 py-safe">
      <Conversation>
        <ConversationContent renderItem={renderMessage} messages={messages} />

        {error && (
          <Text className="p-4 text-red-500 text-center">
            Error: {error.message}
          </Text>
        )}

        <ConversationScrollButton />
      </Conversation>
      <PromptInputProvider>
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputAttachmentsDisplay />
          <PromptInputBody>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent />
              </PromptInputActionMenu>

            
            </PromptInputTools>

            <PromptInputTextarea />

            <PromptInputSubmit />
          </PromptInputBody>
        </PromptInput>
      </PromptInputProvider>
    </View>
  );
};

export default Example;
