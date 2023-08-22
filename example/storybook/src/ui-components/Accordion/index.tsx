import { createAccordion } from '@gluestack-ui/accordion';
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
  Icon,
} from './styled-components';

export const Accordion = createAccordion({
  Root,
  Item,
  Header,
  Trigger,
  Content,
  Icon,
});

export const AccordionItem = Accordion.Item;
export const AccordionHeader = Accordion.Header;
export const AccordionTrigger = Accordion.Trigger;
export const AccordionContent = Accordion.Content;
export const AccordionIcon = Accordion.Icon;
