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
import * as DocumentPicker from 'expo-document-picker'; // ✅ ADDED
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

// ====================== NEW MENU EXPORTS ======================

export const PromptInputActionMenu = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <>{children}</>;
};

export const PromptInputActionMenuTrigger = ({ children, ...props }: any) => {
  return (
    <TouchableOpacity {...props}>
      {children ?? <Text className="text-xl text-primary">+</Text>}
    </TouchableOpacity>
  );
};

export const PromptInputActionMenuContent = () => {
  const attachments = usePromptInputAttachments();

  // ✅ DOCUMENT PICKER ADDED
  const openDocumentPicker = useCallback(async () => {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });

    if (result.assets) {
      const newFiles = result.assets.map((asset) => ({
        id: generateId(),
        filename: asset.name,
        mediaType: asset.mimeType,
        type: 'file' as const,
        url: asset.uri,
      }));

      attachments.add(newFiles);
    }
  }, [attachments]);

  return (
    <Menu
      placement="top"
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <TouchableOpacity {...triggerProps}>
            <Text className="text-xl text-foreground">+</Text>
          </TouchableOpacity>
        );
      }}
    >
      <MenuItem
        key="image"
        textValue="Select Image"
        onPress={attachments.openImagePicker}
      >
        <MenuItemLabel size="sm">Select Image</MenuItemLabel>
      </MenuItem>

      <MenuItem
        key="document"
        textValue="Select Document"
        onPress={openDocumentPicker} // ✅ CONNECTED
      >
        <MenuItemLabel size="sm">Select Document</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

// ====================== EXISTING CODE ======================

const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

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
      quality: 0.10,
      base64: true,
    });

    if (!result.canceled && result.assets) {
    
      const newFiles = result.assets.map((asset) => ({
        id: generateId(),
        filename: asset.fileName || `image-${Date.now()}.jpg`,
        mediaType: asset.mimeType || 'image/jpeg',
        type: 'file' as const,
        url: `data:${asset.mimeType || 'image/jpeg'};base64,${asset.base64}`,
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
    <View className="border-t border-border dark:bg-slate-950 p-4 bg-background">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholderTextColor="#666"
        placeholder="Type your message..."
        multiline
        className="min-h-[80px] text-white text-base px-3 py-3 border border-border rounded-xl bg-background"
        textAlignVertical="top"
      />

      <View className="flex-row justify-between items-center mt-4">
        <TouchableOpacity
          onPress={handleSubmit}
          disabled={!text.trim() && attachments.files.length === 0}
          className={`px-8 py-2.5 rounded-xl font-medium bg-primary text-white${
            !text.trim() && attachments.files.length === 0
              ? ''
              : 'bg-primary text-white'
          }`}
        >
          <Text className="text-primary-foreground">Send</Text>
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};
