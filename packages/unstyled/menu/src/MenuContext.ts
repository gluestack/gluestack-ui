import { createContext } from 'react';

export const MenuContext = createContext({
  onClose: () => {},
  showBackdrop: null as any,
});
