import { createContext } from '@universa11y/utils';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');
