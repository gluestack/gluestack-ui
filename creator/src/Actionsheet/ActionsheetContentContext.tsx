import { createContext } from '../utils';

export const [ActionsheetContentProvider, useActionsheetContent] =
  createContext<any>('ActionsheetContentContext');
