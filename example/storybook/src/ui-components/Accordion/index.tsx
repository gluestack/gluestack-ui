import { createAccordion } from '@gluestack-ui/accordion';
import { Root, Item, Trigger, Content } from './styled-components';

export const Accordion = createAccordion({
  Root,
  Item,
  Trigger,
  Content,
});
export const AccordionItem = Accordion.Item;
export const AccordionTrigger = Accordion.Trigger;
export const AccordionContent = Accordion.Content;
