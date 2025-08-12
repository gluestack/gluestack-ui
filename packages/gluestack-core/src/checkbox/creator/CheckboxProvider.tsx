import { createContext } from '@gluestack-ui/utils/common';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');
