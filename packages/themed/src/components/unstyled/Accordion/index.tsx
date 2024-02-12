import { createAccordion } from '@gluestack-ui/accordion';
import {
  Root,
  Item,
  Header,
  Trigger,
  TitleText,
  ContentText,
  Icon,
  Content,
} from './styled-components';

export const Accordion = createAccordion({
  Root,
  Item,
  Header,
  Trigger,
  Icon,
  TitleText,
  ContentText,
  Content,
});

export const AccordionItem = Accordion.Item;
export const AccordionHeader = Accordion.Header;
export const AccordionTrigger = Accordion.Trigger;
export const AccordionTitleText = Accordion.TitleText;
export const AccordionContentText = Accordion.ContentText;
export const AccordionIcon = Accordion.Icon;
export const AccordionContent = Accordion.Content;
