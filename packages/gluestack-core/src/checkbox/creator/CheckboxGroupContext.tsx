import { createContext } from '@gluestack-ui/utils/common';

export const [CheckboxGroupProvider, useCheckboxGroup] = createContext<any>(
  'CheckboxGroupContext'
);
