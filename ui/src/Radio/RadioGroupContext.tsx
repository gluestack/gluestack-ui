import { createContext } from '../utils';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');
