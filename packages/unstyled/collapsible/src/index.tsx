import type React from 'react';
import { Collapsible as CollapsibleMain } from './Collapsible';
import { CollapsibleTriggerText } from './CollapsibleTriggerText';
import { CollapsibleContentText } from './CollapsibleContentText';
import { CollapsibleTrigger } from './CollapsibleTrigger';
import { CollapsibleContent } from './CollapsibleContent';
import { ICollapsibleComponentType } from './types';

export function createCollapsible<
  CollapsibleProps,
  HeaderProps,
  TriggerProps,
  ContentProps,
  IconProps,
  TriggerTextProps,
  ContentTextProps
>({
  Root,
  Trigger,
  Content,
  TriggerText,
  ContentText,
}: {
  Root: React.ComponentType<CollapsibleProps>;
  Header: React.ComponentType<HeaderProps>;
  Trigger: React.ComponentType<TriggerProps>;
  Content: React.ComponentType<ContentProps>;
  Icon: React.ComponentType<IconProps>;
  TriggerText: React.ComponentType<TriggerTextProps>;
  ContentText: React.ComponentType<ContentTextProps>;
}) {
  const Collapsible = CollapsibleMain(Root) as any;
  Collapsible.Trigger = CollapsibleTrigger(Trigger);
  Collapsible.TriggerText = CollapsibleTriggerText(TriggerText);
  Collapsible.Content = CollapsibleContent(Content);
  Collapsible.ContentText = CollapsibleContentText(ContentText);

  Collapsible.displayName = 'Collapsible';
  Collapsible.Trigger.displayName = 'Collapsible.Trigger';
  Collapsible.TriggerText.displayName = 'Collapsible.TriggerText';
  Collapsible.Content.displayName = 'Collapsible.Content';
  Collapsible.ContentText.displayName = 'Collapsible.ContentText';

  return Collapsible as ICollapsibleComponentType<
    CollapsibleProps,
    TriggerProps,
    TriggerTextProps,
    ContentProps,
    ContentTextProps
  >;
}
