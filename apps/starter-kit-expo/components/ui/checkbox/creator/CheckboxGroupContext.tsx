import { createContext } from '@/utils/gluestack-utils/common';

export const [CheckboxGroupProvider, useCheckboxGroup] = createContext<any>(
  'CheckboxGroupContext'
);
