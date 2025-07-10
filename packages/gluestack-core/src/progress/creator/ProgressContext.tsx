import { createContext } from '@gluestack-ui-nightly/utils/common';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');
