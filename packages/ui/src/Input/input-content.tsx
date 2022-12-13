import { createContext } from '../utils';
import type { InputContext } from './types';

export const [InputProvider, useInput] =
  createContext<InputContext>('InputContext');
