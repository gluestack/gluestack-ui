import { createContext } from '../utils';
import type { TextAreaContext } from './types';

export const [TextAreaProvider, useTextArea] =
  createContext<TextAreaContext>('TextAreaContext');
