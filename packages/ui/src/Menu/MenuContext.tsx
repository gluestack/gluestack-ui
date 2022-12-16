import { createContext } from '../../src/utils/createContext';

export const [MenuProvider, useMenu] = createContext<any>('MenuContext');
