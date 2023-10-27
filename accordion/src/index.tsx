import type React from 'react';
import { Accordion as AccordionMain } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { AccordionTrigger } from './AccordionTrigger';
import { AccordionContent } from './AccordionContent';
import { IAccordionComponentType } from './types';
import { AccordionIcon } from './AccordionIcon';
import { AccordionHeader } from './AccordionHeader';

export function createAccordion<
  AccordionProps,
  ItemProps,
  HeaderProps,
  TriggerProps,
  ContentProps,
  IconProps
>({
  Root,
  Item,
  Header,
  Trigger,
  Content,
  Icon,
}: {
  Root: React.ComponentType<AccordionProps>;
  Item: React.ComponentType<ItemProps>;
  Header: React.ComponentType<HeaderProps>;
  Trigger: React.ComponentType<TriggerProps>;
  Content: React.ComponentType<ContentProps>;
  Icon: React.ComponentType<IconProps>;
}) {
  const Accordion = AccordionMain(Root) as any;
  Accordion.Item = AccordionItem(Item);
  Accordion.Header = AccordionHeader(Header);
  Accordion.Trigger = AccordionTrigger(Trigger);
  Accordion.Content = AccordionContent(Content);
  Accordion.Icon = AccordionIcon(Icon);

  Accordion.displayName = 'Accordion';
  Accordion.Item.displayName = 'Accordion.Item';
  Accordion.Header.displayName = 'Accordion.Header';
  Accordion.Trigger.displayName = 'Accordion.Trigger';
  Accordion.Content.displayName = 'Accordion.Content';
  Accordion.Icon.displayName = 'Accordion.Icon';

  return Accordion as IAccordionComponentType<
    AccordionProps,
    ItemProps,
    HeaderProps,
    TriggerProps,
    ContentProps,
    IconProps
  >;
}
