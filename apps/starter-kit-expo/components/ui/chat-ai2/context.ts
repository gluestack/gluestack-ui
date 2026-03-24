import { createContext } from 'react';
import type { ChatContextValue } from './types';

export const ChatContext = createContext<ChatContextValue | null>(null);
