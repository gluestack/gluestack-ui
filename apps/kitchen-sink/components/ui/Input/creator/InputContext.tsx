import type { InputContext } from './types';
import { createContext } from '../../../../utils/gluestack-utils/common';

export const [InputProvider, useInput] =
  createContext<InputContext>('InputContext');
