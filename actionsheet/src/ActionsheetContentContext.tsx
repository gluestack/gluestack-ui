import { createContext } from '@gluestack-ui/utils';

export const [ActionsheetContentProvider, useActionsheetContent] =
  createContext<any>('ActionsheetContentContext');
