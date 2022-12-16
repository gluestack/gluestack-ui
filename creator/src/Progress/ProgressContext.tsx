import { createContext } from '../utils';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');
