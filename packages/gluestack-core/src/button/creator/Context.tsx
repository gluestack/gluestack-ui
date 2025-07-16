import { createContext, useContext } from 'react';
export const ButtonContext = createContext<any>({});
export const useButtonContext = () => useContext(ButtonContext);
