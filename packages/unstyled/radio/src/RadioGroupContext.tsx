import { createContext } from '@gluestack-ui/utils';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');
