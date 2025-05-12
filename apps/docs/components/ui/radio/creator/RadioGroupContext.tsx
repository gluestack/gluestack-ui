import { createContext } from '@/utils/common';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');
