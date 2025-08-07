import type { InputContext } from './types';
import { createContext } from '@gluestack-ui/utils/common';

export const [InputProvider, useInput] =
  createContext<InputContext>('InputContext');
