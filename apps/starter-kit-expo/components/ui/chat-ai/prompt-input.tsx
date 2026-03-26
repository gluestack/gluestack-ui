// components/ai-elements/prompt-input.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export type PromptInputMessage = { text: string };

export type PromptInputProps = {
  /** sendMessage from useChat() hook - REQUIRED */
  sendMessage: (message: PromptInputMessage) => void | Promise<void>;
  placeholder?: string;
  status?: 'ready' | 'streaming' | 'submitted' | 'error';
};

export const PromptInput = ({
  sendMessage,
  placeholder = 'Type a message...',
  status = 'ready',
}: PromptInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    if (!text.trim()) return;

    if (typeof sendMessage !== 'function') {
      Alert.alert(
        'Error',
        'sendMessage is not a function. Make sure you pass sendMessage from useChat() to PromptInput.'
      );
      return;
    }

    try {
      await sendMessage({ text: text.trim() });
      setText('');
    } catch (err) {
      console.error('Failed to send message:', err);
      Alert.alert('Error', 'Failed to send message. Please try again.');
    }
  };

  return (
    <View className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3">
      <View className="flex-row items-end gap-2">
        <View className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-3xl px-5 py-3">
          <TextInput
            className="text-base max-h-32 text-white"
            value={text}
            onChangeText={setText}
            placeholder={placeholder}
            multiline
            onSubmitEditing={handleSubmit}
           
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={ !text.trim()}
          className={`px-7 py-3 rounded-3xl ${
          text.trim() ? 'bg-blue-600' : 'bg-slate-300'
          }`}
        >
          <Text className="text-white font-semibold">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
