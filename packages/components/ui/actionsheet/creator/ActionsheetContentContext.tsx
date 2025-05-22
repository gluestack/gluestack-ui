import { createContext } from '@/utils/gluestack-utils/common';

export const [ActionsheetContentProvider, useActionsheetContent] =
  createContext<any>('ActionsheetContentContext');
