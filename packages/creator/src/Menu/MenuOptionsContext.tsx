import { createContext } from '../utils/createContext';

export const [MenuOptionsProvider, useMenuOptions] =
  createContext<any>('MenuOptionsContext');
