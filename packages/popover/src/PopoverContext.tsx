import { createContext } from '@universa11y/utils';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');
