import { createContext } from '../../../../utils/common';

export const [ActionsheetContentProvider, useActionsheetContent] =
  createContext<any>('ActionsheetContentContext');
