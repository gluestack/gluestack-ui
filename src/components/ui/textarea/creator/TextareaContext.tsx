import { createContext } from '@gluestack-ui-nightly/utils/common';
import type { TextareaContext } from './types';

export const [TextareaProvider, useTextarea] =
  createContext<TextareaContext>('TextareaContext');
