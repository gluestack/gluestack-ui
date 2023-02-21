import { createContext } from '@gluestack-ui/utils';

export const [MenuItemOptionProvider, useMenuItemOption] = createContext<any>(
  'MenuItemOptionContext'
);
