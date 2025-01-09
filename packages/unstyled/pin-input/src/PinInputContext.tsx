import type { IPinInputContext } from './types';
import { createContext } from '@gluestack-ui/utils';

export const [PinInputProvider, usePinInput] =
  createContext<IPinInputContext>('PinInputContext');
