import { createContext } from '../utils/createContext';

export const [AlertProvider, useAlert] = createContext<any>('AlertContext');
