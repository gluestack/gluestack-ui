import { createContext } from '@/utils/gluestack-utils/common';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');
