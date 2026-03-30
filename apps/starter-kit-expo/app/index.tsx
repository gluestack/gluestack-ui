'use client';

import {
  Attachment,
  AttachmentHoverCard,
  AttachmentHoverCardContent,
  AttachmentPreview,
  AttachmentRemove,
  Attachments,
} from '@/components/ui/chat-ai/attatchments';

import { Image } from '@/components/ui/image';

import { memo, useCallback, useState } from 'react';
import { View } from 'react-native';

// Simple random ID generator (works on both Web and React Native)
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const initialAttachments = [
  {
    filename: 'mountain-landscape.jpg',
    id: generateId(),
    mediaType: 'image/jpeg' as const,
    type: 'file' as const,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  },
  {
    filename: 'ocean-sunset.jpg',
    id: generateId(),
    mediaType: 'image/jpeg' as const,
    type: 'file' as const,
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=400&fit=crop',
  },
  {
    filename: 'document.pdf',
    id: generateId(),
    mediaType: 'application/pdf' as const,
    type: 'file' as const,
    url: '',
  },
  {
    filename: 'video.mp4',
    id: generateId(),
    mediaType: 'video/mp4' as const,
    type: 'file' as const,
    url: '',
  },
];

interface AttachmentItemProps {
  attachment: (typeof initialAttachments)[0];
  onRemove: (id: string) => void;
}

const AttachmentItem = memo(({ attachment, onRemove }: AttachmentItemProps) => {
  const handleRemove = useCallback(
    () => onRemove(attachment.id),
    [onRemove, attachment.id]
  );

  return (
    <Attachment data={attachment} onRemove={handleRemove}>
      <AttachmentHoverCard>
        <AttachmentPreview /> {/* ← This becomes the trigger */}
        <AttachmentHoverCardContent>
          <Image
            source={{ uri: attachment.url }}
            className="w-64 h-64 rounded-lg"
            alt={attachment.filename}
          />
        </AttachmentHoverCardContent>
      </AttachmentHoverCard>

      <AttachmentRemove />
    </Attachment>
  );
});

AttachmentItem.displayName = 'AttachmentItem';

const Example = () => {
  const [attachments, setAttachments] = useState(initialAttachments);

  const handleRemove = useCallback((id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return (
    <View className="flex items-center justify-center p-8">
      <Attachments variant="grid">
        {attachments.map((attachment) => (
          <AttachmentItem
            attachment={attachment}
            key={attachment.id}
            onRemove={handleRemove}
          />
        ))}
      </Attachments>
    </View>
  );
};

export default Example;
