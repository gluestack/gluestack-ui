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
    `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

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
        index: messages.length,
      };

      const thinkingMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: 'Thinking...',
        timestamp: Date.now(),
        index: messages.length + 1,
        status: 'thinking',
      };

      // Add both user message and thinking placeholder together
      const updatedMessages = [...messages, userMessage, thinkingMessage];
      setMessages(updatedMessages);

      try {
        const response = await fetch(api, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: updatedMessages
              .filter((m) => m.status !== 'thinking')
              .map((m) => ({
                role: m.role,
                content: m.content,
              })),
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Replace thinking message with actual response
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === thinkingMessage.id
              ? {
                  ...msg,
                  content: data.message || 'No response',
                  status: 'idle',
                }
              : msg
          )
        );
        setStatus('idle');
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        setStatus('error');
        // Mark thinking message as error
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === thinkingMessage.id
              ? { ...msg, content: 'Error occurred', status: 'error' }
              : msg
          )
        );
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
