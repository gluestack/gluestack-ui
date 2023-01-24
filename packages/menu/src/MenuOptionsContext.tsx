import { createContext } from '@universa11y/utils';

export const [MenuOptionsProvider, useMenuOptions] =
  createContext<any>('MenuOptionsContext');
