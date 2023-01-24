import { createContext } from '@universa11y/utils';
export const [PopperProvider, usePopperContext] =
  createContext<any>('PopperContext');
