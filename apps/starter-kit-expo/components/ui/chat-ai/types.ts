export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  index: number;
  status?: 'idle' | 'thinking' | 'error';
}
