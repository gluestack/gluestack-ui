import { createContext } from '../utils';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');
