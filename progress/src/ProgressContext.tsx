import { createContext } from '@gluestack-ui/utils';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');
