import type { InputContext } from './types';
import { createContext } from '@/utils/common';

export const [InputProvider, useInput] =
  createContext<InputContext>('InputContext');
