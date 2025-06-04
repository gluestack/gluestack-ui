import { createContext } from '@/utils/gluestack-utils/common';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');
