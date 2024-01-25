import { createContext, useContext } from 'react';
export const ParentContext = createContext({});
export const useStyleContext = () => {
  return useContext(ParentContext) as any;
};
