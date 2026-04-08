import { createContext } from 'react';
import { ChatContextValue } from './types';

export const ChatContext = createContext<ChatContextValue | null>(null);
