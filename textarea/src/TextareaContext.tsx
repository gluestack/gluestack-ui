import { createContext } from '@gluestack-ui/utils';
import type { TextareaContext } from './types';

export const [TextareaProvider, useTextarea] =
  createContext<TextareaContext>('TextareaContext');
