import { createContext } from '@/utils/gluestack-utils/common';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');
