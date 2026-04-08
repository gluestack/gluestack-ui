export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp?: number;
}

export interface ChatContextValue {
  messages: ChatMessage[];
  loading: boolean;
  error: Error | null;
  status: 'idle' | 'loading' | 'error';
  send: (input: string) => void;
  reset: () => void;
  setMessages: (messages: ChatMessage[]) => void;
}
