'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import * as ImagePicker from 'expo-image-picker';

import { View, TextInput, TouchableOpacity, Text } from 'react-native';


// Custom ID generator
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// Types
export type FileUIPart = {
  type: 'file';
  filename?: string;
  mediaType?: string;
  url: string;
};

export interface PromptInputMessage {
  text: string;
  files: (FileUIPart & { id: string })[];
}

// ====================== ATTACHMENTS CONTEXT ======================
const AttachmentsContext = createContext<any>(null);

export const usePromptInputAttachments = () => {
  const context = useContext(AttachmentsContext);
  if (!context) {
    throw new Error(
      'usePromptInputAttachments must be used within PromptInputProvider'
    );
  }
  return context;
};

// ====================== PROVIDER ======================
export const PromptInputProvider = ({ children }: { children: ReactNode }) => {
  const [textInput, setTextInput] = useState('');
  const [attachmentFiles, setAttachmentFiles] = useState<
    (FileUIPart & { id: string })[]
  >([]);

  const add = useCallback((newFiles: (FileUIPart & { id: string })[]) => {
    setAttachmentFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const remove = useCallback((id: string) => {
    setAttachmentFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const clear = useCallback(() => {
    setAttachmentFiles([]);
    setTextInput('');
  }, []);

  const openImagePicker = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      quality: 0.85,
    });

    if (!result.canceled && result.assets) {
      const newFiles = result.assets.map((asset) => ({
        id: generateId(),
        filename: asset.fileName || `image-${Date.now()}.jpg`,
        mediaType: asset.mimeType || 'image/jpeg',
        type: 'file' as const,
        url: asset.uri,
      }));
      add(newFiles);
    }
  }, [add]);

  const attachmentsValue = useMemo(
    () => ({
      files: attachmentFiles,
      add,
      remove,
      clear,
      openImagePicker,
    }),
    [attachmentFiles, add, remove, clear, openImagePicker]
  );

  return (
    <AttachmentsContext.Provider value={attachmentsValue}>
      {children}
    </AttachmentsContext.Provider>
  );
};

// ====================== PROMPT INPUT ======================
export type PromptInputProps = {
  children?: ReactNode;
  onSubmit?: (message: PromptInputMessage) => void;
};

export const PromptInput = ({ children, onSubmit }: PromptInputProps) => {
  const [text, setText] = useState('');

  const attachments = usePromptInputAttachments();

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ text, files: attachments.files });
    }
    setText('');
    attachments.clear();
  };

  return (
    <View className="border border-border rounded-2xl p-4 bg-background">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type your message..."
        multiline
        className="min-h-[80px] text-base px-3 py-3 border border-border rounded-xl bg-background"
        textAlignVertical="top"
      />

      <View className="flex-row justify-between items-center mt-4">
        <TouchableOpacity
          onPress={attachments.openImagePicker}
          className="px-5 py-2.5 bg-muted rounded-xl active:bg-accent"
        >
          <Text className="text-xl">📷</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={!text.trim() && attachments.files.length === 0}
          className={`px-8 py-2.5 rounded-xl font-medium ${
            !text.trim() && attachments.files.length === 0
              ? 'bg-muted text-muted-foreground'
              : 'bg-primary text-white'
          }`}
        >
          <Text>Send</Text>
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};
