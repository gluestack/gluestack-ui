import { createContext } from '../utils/createContext';

export const [MenuItemOptionProvider, useMenuItemOption] = createContext<any>(
  'MenuItemOptionContext'
);
