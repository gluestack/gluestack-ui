import { createContext } from '../utils/createContext';
import type { PopperContext } from './types';

export const [PopperProvider, usePopperContext] =
  createContext<PopperContext>('Popper');
