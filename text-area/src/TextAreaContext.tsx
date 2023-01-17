import { createContext } from '@universa11y/utils';
import type { TextAreaContext } from './types';

export const [TextAreaProvider, useTextArea] =
  createContext<TextAreaContext>('TextAreaContext');
