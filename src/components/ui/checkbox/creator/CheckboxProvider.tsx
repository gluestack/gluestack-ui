import { createContext } from '@/utils/gluestack-utils/common';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');
