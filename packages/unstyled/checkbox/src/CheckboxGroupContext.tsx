import { createContext } from '@gluestack-ui/utils';

export const [CheckboxGroupProvider, useCheckboxGroup] = createContext<any>(
  'CheckboxGroupContext'
);
