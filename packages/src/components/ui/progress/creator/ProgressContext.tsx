import { createContext } from '@/utils/common';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');