import type React from 'react';
import type { SharedValue } from 'react-native-reanimated';

export type ChatRole = 'user' | 'assistant' | 'optimistic-placeholder';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  status?: 'thinking' | 'ready' | 'done';
  index: number;
  timestamp?: number; 
};

export type ChatStatus = 'idle' | 'loading' | 'error';

export interface ChatContextValue {
  messages: ChatMessage[];
  loading: boolean;
  error: Error | null;
  status: ChatStatus;

  send: (input: string) => void;
  reset: () => void;
  setMessages: (messages: ChatMessage[]) => void;

  blankSize: SharedValue<number>;
  composerHeight: SharedValue<number>;
  userMessageHeight: SharedValue<number>;
  assistantMessageHeight: SharedValue<number>;

  isMessageSendAnimating: SharedValue<boolean>;
  didUserMessageAnimate: SharedValue<boolean>;
}
