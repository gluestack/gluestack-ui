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
import { Platform } from 'react-native';

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

  const add = useCallback((newFiles: any[] | any) => {
    // Accept single object OR array (more flexible)
    const filesToAdd = Array.isArray(newFiles) ? newFiles : [newFiles];
    setAttachmentFiles((prev) => [...prev, ...filesToAdd]);
  }, []);

  const remove = useCallback((id: string) => {
    setAttachmentFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const clear = useCallback(() => {
    setAttachmentFiles([]);
    setTextInput('');
  }, []);

  // ====================== FIXED IMAGE PICKER ======================
  const openImagePicker = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      quality: 0.1,
      base64: Platform.OS !== 'web', // base64 only on native
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const newFiles = result.assets.map((asset) => {
        let url = '';

        if (Platform.OS === 'web') {
          url = asset.uri; // blob URL on web
        } else {
          url = `data:${asset.mimeType || 'image/jpeg'};base64,${asset.base64}`;
        }

        return {
          id: generateId(),
          filename: asset.fileName || asset.name || `image-${Date.now()}.jpg`,
          mediaType: asset.mimeType || 'image/jpeg',
          type: 'file' as const,
          url,
        };

      });

      add(newFiles); // ← now correctly passes array
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

// ====================== REST OF YOUR COMPONENTS (unchanged) ======================

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
  const inputAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: height.value }],
    }),
    [height.value]
  );

  return (
    <PromptContext.Provider value={{ text, setText, handleSubmit, isDisabled }}>
      <Animated.View style={inputAnimatedStyle}>
        <View className="bg-muted border-border absolute bottom-4 w-full rounded-3xl px-3 py-2">
          {children}
        </View>
      </Animated.View>
    </PromptContext.Provider>
  );
};

export const PromptInputBody = ({ children }: { children: ReactNode }) => (
  <View className="flex-row pt-2 items-center gap-2">{children}</View>
);

export const PromptInputTextarea = () => {
  const { text, setText } = usePrompt();
  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder="Let’s start building it"
      multiline
      className="flex-1 text-xl px-4 items-center justify-center rounded-3xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-transparent"
    />
  );
};

export const PromptInputFooter = ({ children }: { children: ReactNode }) => (
  <View className="flex-row items-center justify-between mt-6">{children}</View>
);

export const PromptInputTools = ({ children }: { children: ReactNode }) => (
  <View className="flex-row items-center gap-2">{children}</View>
);

export const PromptInputButton = ({ children }: { children: ReactNode }) => (
  <TouchableOpacity className="px-3 py-1 rounded-full bg-muted">
    <Text>{children}</Text>
  </TouchableOpacity>
);

export const PromptInputSubmit = () => {
  const { handleSubmit, isDisabled } = usePrompt();
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      disabled={isDisabled}
      className={`h-10 w-10 rounded-full items-center justify-center mx-3 bg-primary ${
        isDisabled ? 'opacity-50' : ''
      }`}
    >
      <Text className="text-primary-foreground">↑</Text>
    </TouchableOpacity>
  );
};

export const PromptInputActionMenu = ({ children }: any) => <>{children}</>;

export const PromptInputActionMenuTrigger = ({ children, ...props }: any) => (
  <TouchableOpacity {...props}>
    <View className="h-10 w-10 rounded-full items-center justify-center bg-primary/10">
      {children ?? <Text className="text-xl text-primary">+</Text>}
    </View>
  </TouchableOpacity>
);

export const PromptInputActionMenuContent = ({
  trigger,
}: {
  trigger: (props: any) => React.ReactNode;
}) => {
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
    <Menu placement="top" offset={5} trigger={trigger}>
      <MenuItem onPress={attachments.openImagePicker}>
        <MenuItemLabel>Select Image</MenuItemLabel>
      </MenuItem>

      <MenuItem onPress={openDocumentPicker}>
        <MenuItemLabel>Select Document</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};
