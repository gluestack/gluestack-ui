import { createContext } from '@universa11y/utils';

export const [MenuItemOptionProvider, useMenuItemOption] = createContext<any>(
  'MenuItemOptionContext'
);
