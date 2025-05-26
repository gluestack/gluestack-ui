import { createContext } from '../../../../utils/common';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');
