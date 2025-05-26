import { createContext } from '@/utils/gluestack-utils/common';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');

export const [PopoverContentProvider, usePopoverContent] =
  createContext<any>('PopoverContext');
