import { createContext } from '@gluestack-ui/utils';
export const [PopperProvider, usePopperContext] =
  createContext<any>('PopperContext');
