import { createContext, useContext } from 'react';
export const CollapsibleContext = createContext<any>({});
export const useCollapsibleContext = () => {
  return useContext(CollapsibleContext);
};
