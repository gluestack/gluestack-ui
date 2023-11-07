import type React from 'react';
import { Accordion as AccordionMain } from './Accordion';
import { AccordionTitleText } from './AccordionTitleText';
import { AccordionContentText } from './AccordionContentText';
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
  IconProps,
  TitleTextProps,
  ContentTextProps
>({
  Root,
  Item,
  Header,
  Trigger,
  Content,
  Icon,
  TitleText,
  ContentText,
}: {
  Root: React.ComponentType<AccordionProps>;
  Item: React.ComponentType<ItemProps>;
  Header: React.ComponentType<HeaderProps>;
  Trigger: React.ComponentType<TriggerProps>;
  Content: React.ComponentType<ContentProps>;
  Icon: React.ComponentType<IconProps>;
  TitleText: React.ComponentType<TitleTextProps>;
  ContentText: React.ComponentType<ContentTextProps>;
}) {
  const Accordion = AccordionMain(Root) as any;
  Accordion.Item = AccordionItem(Item);
  Accordion.Header = AccordionHeader(Header);
  Accordion.Trigger = AccordionTrigger(Trigger);
  Accordion.Content = AccordionContent(Content);
  Accordion.Icon = AccordionIcon(Icon);
  Accordion.TitleText = AccordionTitleText(TitleText);
  Accordion.ContentText = AccordionContentText(ContentText);

  Accordion.displayName = 'Accordion';
  Accordion.Item.displayName = 'Accordion.Item';
  Accordion.Header.displayName = 'Accordion.Header';
  Accordion.Trigger.displayName = 'Accordion.Trigger';
  Accordion.Content.displayName = 'Accordion.Content';
  Accordion.Icon.displayName = 'Accordion.Icon';
  Accordion.TitleText.displayName = 'Accordion.TtitleText';

  return Accordion as IAccordionComponentType<
    AccordionProps,
    ItemProps,
    HeaderProps,
    TriggerProps,
    ContentProps,
    IconProps,
    TitleTextProps,
    ContentTextProps
  >;
}
