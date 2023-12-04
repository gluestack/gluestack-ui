import type { InputContext } from './types';
import { createContext } from '@gluestack-ui/utils';

export const [InputProvider, useInput] =
  createContext<InputContext>('InputContext');
