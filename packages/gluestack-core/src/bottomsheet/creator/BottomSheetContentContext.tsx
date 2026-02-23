import { createContext } from '@gluestack-ui/utils/common';

export const [BottomSheetContentProvider, useBottomSheetContent] =
  createContext<any>('BottomSheetContentContext');
