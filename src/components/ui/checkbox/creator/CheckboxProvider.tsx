import { createContext } from '@gluestack-ui-nightly/utils/common';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');
