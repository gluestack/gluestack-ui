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
import * as DocumentPicker from 'expo-document-picker';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

// ====================== CONTEXT ======================

type PromptContextType = {
  text: string;
  setText: (t: string) => void;
  handleSubmit: () => void;
  isDisabled: boolean;
};

const PromptContext = createContext<PromptContextType | null>(null);

const usePrompt = () => {
  const context = useContext(PromptContext);
  if (!context) throw new Error('Must be inside PromptInput');
  return context;
};

// ====================== ATTACHMENTS ======================

const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2) +
    Math.random().toString(36).substring(2)
  );
};

export type FileUIPart = {
  type: 'file';
  filename?: string;
  mediaType?: string;
  url: string;
};

const AttachmentsContext = createContext<any>(null);

export const usePromptInputAttachments = () => {
  const context = useContext(AttachmentsContext);
  if (!context) {
    throw new Error('usePromptInputAttachments must be used within provider');
  }
  return context;
};

export const PromptInputProvider = ({ children }: { children: ReactNode }) => {
  const [textInput, setTextInput] = useState('');
  const [attachmentFiles, setAttachmentFiles] = useState<
    (FileUIPart & { id: string })[]
  >([]);

  const add = useCallback((newFiles: any[]) => {
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
      quality: 0.1,
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

// ====================== MAIN INPUT ======================

export const PromptInput = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit?: any;
}) => {
  const [text, setText] = useState('');
  const attachments = usePromptInputAttachments();

  const handleSubmit = () => {
    onSubmit?.({ text, files: attachments.files });
    setText('');
    attachments.clear();
  };

  const isDisabled = !text.trim() && attachments.files.length === 0;

  const { height } = useReanimatedKeyboardAnimation();
  const inputAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: height.value }],
  }));

  return (
    <PromptContext.Provider value={{ text, setText, handleSubmit, isDisabled }}>
      <Animated.View
        style={inputAnimatedStyle}
        className="border-t border-border bg-background px-3 py-2"
      >
        {children}
      </Animated.View>
    </PromptContext.Provider>
  );
};

// ====================== BODY ======================

export const PromptInputBody = ({ children }: { children: ReactNode }) => {
  return <View className="flex-row items-center gap-2">{children}</View>;
};

// ====================== TEXTAREA ======================

export const PromptInputTextarea = () => {
  const { text, setText } = usePrompt();

  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder="Let’s start building it"
      multiline
      className="flex-1 text-base px-4 py-2 rounded-full bg-muted text-foreground placeholder:text-muted-foreground"
    />
  );
};

// ====================== FOOTER ======================

export const PromptInputFooter = ({ children }: { children: ReactNode }) => {
  return (
    <View className="flex-row items-center justify-between mt-2">
      {children}
    </View>
  );
};

// ====================== TOOLS ======================

export const PromptInputTools = ({ children }: { children: ReactNode }) => {
  return <View className="flex-row items-center gap-2">{children}</View>;
};

// ====================== BUTTON ======================

export const PromptInputButton = ({ children }: { children: ReactNode }) => {
  return (
    <TouchableOpacity className="px-3 py-1 rounded-full bg-muted">
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

// ====================== SUBMIT ======================

export const PromptInputSubmit = () => {
  const { handleSubmit, isDisabled } = usePrompt();

  return (
    <TouchableOpacity
      onPress={handleSubmit}
      disabled={isDisabled}
      className={`h-10 w-10 rounded-full items-center justify-center bg-primary ${
        isDisabled ? 'opacity-50' : ''
      }`}
    >
      <Text className="text-primary-foreground">↑</Text>
    </TouchableOpacity>
  );
};

// ====================== ACTION MENU ======================

export const PromptInputActionMenu = ({ children }: any) => <>{children}</>;

export const PromptInputActionMenuTrigger = ({ children, ...props }: any) => {
  return (
    <TouchableOpacity {...props}>
      {children ?? <Text className="text-xl text-primary">+</Text>}
    </TouchableOpacity>
  );
};

export const PromptInputActionMenuContent = () => {
  const attachments = usePromptInputAttachments();

  const openDocumentPicker = useCallback(async () => {
    const result = await DocumentPicker.getDocumentAsync({ multiple: true });

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
      trigger={(props) => (
        <TouchableOpacity {...props}>
          <Text className="text-xl text-primary">+</Text>
        </TouchableOpacity>
      )}
    >
      <MenuItem onPress={attachments.openImagePicker}>
        <MenuItemLabel>Select Image</MenuItemLabel>
      </MenuItem>

      <MenuItem onPress={openDocumentPicker}>
        <MenuItemLabel>Select Document</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};
