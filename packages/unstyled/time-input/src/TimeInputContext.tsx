import { createContext } from '@gluestack-ui/utils';
import type { TimeInputContext } from './types';

export const [TimeInputProvider, useTimeInput] =
  createContext<TimeInputContext>('TimeInputContext');
