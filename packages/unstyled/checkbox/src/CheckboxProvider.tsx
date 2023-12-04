import { createContext } from '@gluestack-ui/utils';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');
