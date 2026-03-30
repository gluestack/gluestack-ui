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
  PromptInputActionMenu,
  PromptInputActionMenuContent,
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

// ================= EXAMPLE =================
const Example = () => {
  const handleSubmit = useCallback((message: PromptInputMessage) => {
    console.log('Submitted Message:', message);
  }, []);

  return (
    <View className="flex-1 pt-safe bg-white">
      <PromptInputProvider>
        {/* Attachments */}
        <PromptInputAttachmentsDisplay />

        {/* Input */}
        <PromptInput onSubmit={handleSubmit}>
          {/* 🔥 MENU INSIDE INPUT */}
          <PromptInputActionMenu>
            <PromptInputActionMenuContent />
          </PromptInputActionMenu>
        </PromptInput>
      </PromptInputProvider>
    </View>
  );
};

export default Example;
