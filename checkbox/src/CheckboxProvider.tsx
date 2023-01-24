import { createContext } from '@universa11y/utils';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');
