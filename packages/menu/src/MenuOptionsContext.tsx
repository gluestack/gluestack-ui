import { createContext } from '@gluestack-ui/utils';

export const [MenuOptionsProvider, useMenuOptions] =
  createContext<any>('MenuOptionsContext');
