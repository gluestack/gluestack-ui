import { createContext } from '@gluestack-ui-nightly/utils/common';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');
