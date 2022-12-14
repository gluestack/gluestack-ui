import { createContext } from '../../src/utils/createContext';

export const [MenuOptionsProvider, useMenuOptions] =
  createContext<any>('MenuOptionsContext');
