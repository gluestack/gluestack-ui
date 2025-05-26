import { createContext } from '@/utils/common';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');
