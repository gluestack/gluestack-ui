import { createContext } from '@gluestack-ui/utils/common';

export const [ActionsheetContentProvider, useActionsheetContent] =
  createContext<any>('ActionsheetContentContext');
