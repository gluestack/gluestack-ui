import { createContext } from '@gluestack-ui/utils/common';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');
