import { createContext } from '@gluestack-ui-nightly/utils/common';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');

export const [PopoverContentProvider, usePopoverContent] =
  createContext<any>('PopoverContext');
