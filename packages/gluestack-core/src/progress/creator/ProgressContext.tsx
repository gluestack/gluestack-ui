import { createContext } from '@gluestack-ui/utils/common';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');
