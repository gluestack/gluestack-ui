import { createContext } from '@gluestack-ui-nightly/utils/common';

export const [ActionsheetContentProvider, useActionsheetContent] =
  createContext<any>('ActionsheetContentContext');
