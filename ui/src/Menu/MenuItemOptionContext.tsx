import { createContext } from '../../src/utils/createContext';

export const [MenuItemOptionProvider, useMenuItemOption] = createContext<any>(
  'MenuItemOptionContext'
);
