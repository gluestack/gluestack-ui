import { createContext } from '../utils/createContext';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');
