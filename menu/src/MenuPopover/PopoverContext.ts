import { createContext } from '@gluestack-ui/utils';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');
