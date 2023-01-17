import { createContext } from '@universa11y/utils';
import type { InputContext } from './types';

export const [InputProvider, useInput] =
  createContext<InputContext>('InputContext');
