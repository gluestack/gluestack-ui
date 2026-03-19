import { useState, useCallback } from 'react';
import { ChatMessage } from './types';

interface UseChatOptions {
  api: string;
  initialMessages?: ChatMessage[];
}

interface UseChatReturn {
  messages: ChatMessage[];
  send: (input: string) => void;
  loading: boolean;
  error: Error | null;
  reset: () => void;
  setMessages: (messages: ChatMessage[]) => void;
  status: 'idle' | 'loading' | 'error';
}

export function useChat(options: UseChatOptions): UseChatReturn {
  const { api, initialMessages = [] } = options;
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const generateId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const send = useCallback(
    async (input: string) => {
      if (!input.trim()) return;

      setLoading(true);
      setError(null);
      setStatus('loading');

      const userMessage: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: input,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);

      try {
        const response = await fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: input,
            messages: [...messages, userMessage],
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: data.message || data.content || 'OK',
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setStatus('idle');
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        setStatus('error');
      } finally {
        setLoading(false);
      }
    },
    [api, messages]
  );

  const reset = useCallback(() => {
    setMessages(initialMessages);
    setError(null);
    setStatus('idle');
    setLoading(false);
  }, [initialMessages]);

  return {
    messages,
    send,
    loading,
    error,
    reset,
    setMessages,
    status,
  };
}
