import { createContext } from '../utils/createContext';
export const [PopperProvider, usePopperContext] =
  createContext<any>('PopperContext');
