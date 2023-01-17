import { createContext } from '@universa11y/utils';

export const [CheckboxGroupProvider, useCheckboxGroup] = createContext<any>(
  'CheckboxGroupContext'
);
