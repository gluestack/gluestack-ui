'use client';

import {
  Attachment,
  AttachmentPreview,
  AttachmentRemove,
  Attachments,
} from '@/components/ui/chat-ai/attatchments';

import {
  PromptInput,
  PromptInputProvider,
  usePromptInputAttachments,
  PromptInputMessage,
} from '@/components/ui/chat-ai/prompt-input';

import { memo, useCallback } from 'react';
import { View } from 'react-native';

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

// Attachments Display Component
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

const Example = () => {
  const handleSubmit = useCallback((message: PromptInputMessage) => {
    console.log('Submitted Message:', message);
  }, []);

  return (
    <View className="flex-1 p-4 bg-background">
      <PromptInputProvider>
        {/* Attachments - rendered inside provider */}
        <PromptInputAttachmentsDisplay />

        {/* PromptInput - only text input */}
        <PromptInput onSubmit={handleSubmit} />
      </PromptInputProvider>
    </View>
  );
};

export default Example;
