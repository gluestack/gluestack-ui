import { createContext } from '@gluestack-ui-nightly/utils/common';

export const [CheckboxGroupProvider, useCheckboxGroup] = createContext<any>(
  'CheckboxGroupContext'
);
