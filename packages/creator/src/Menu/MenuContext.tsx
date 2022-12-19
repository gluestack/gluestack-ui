import { createContext } from '../utils/createContext';

export const [MenuProvider, useMenu] = createContext<any>('MenuContext');
