import { createContext } from '@gluestack-ui/utils';

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<any>('AccordionItemContext');
