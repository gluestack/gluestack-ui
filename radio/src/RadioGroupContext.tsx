import { createContext } from '@universa11y/utils';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');
