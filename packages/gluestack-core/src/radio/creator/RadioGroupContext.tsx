import { createContext } from '@gluestack-ui-nightly/utils/common';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');
