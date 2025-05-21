import { createContext } from '@/utils/common';
import type { TextareaContext } from './types';

export const [TextareaProvider, useTextarea] =
  createContext<TextareaContext>('TextareaContext');
