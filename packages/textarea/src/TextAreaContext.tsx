import { createContext } from '@gluestack-ui/utils';
import type { TextAreaContext } from './types';

export const [TextAreaProvider, useTextArea] =
  createContext<TextAreaContext>('TextAreaContext');
