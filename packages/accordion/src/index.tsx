import type React from 'react';
import { Accordion as AccordionMain } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { AccordionTrigger } from './AccordionTrigger';
import { AccordionContent } from './AccordionContent';
import { IAccordionComponentType } from './types';

export function createAccordion<
  AccordionProps,
  ItemProps,
  TriggerProps,
  ContentProps
>({
  Root,
  Item,
  Trigger,
  Content,
}: {
  Root: React.ComponentType<AccordionProps>;
  Item: React.ComponentType<ItemProps>;
  Trigger: React.ComponentType<TriggerProps>;
  Content: React.ComponentType<ContentProps>;
}) {
  const Accordion = AccordionMain(Root) as any;
  Accordion.Item = AccordionItem(Item);
  Accordion.Trigger = AccordionTrigger(Trigger);
  Accordion.Content = AccordionContent(Content);

  Accordion.displayName = 'Accordion';
  Accordion.Item.displayName = 'Accordion.Item';
  Accordion.Trigger.displayName = 'Accordion.Trigger';
  Accordion.Content.displayName = 'Accordion.Content';

  return Accordion as IAccordionComponentType<
    AccordionProps,
    ItemProps,
    TriggerProps,
    ContentProps
  >;
}
