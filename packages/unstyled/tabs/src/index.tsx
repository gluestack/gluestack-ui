import type React from 'react';
import { Tabs as TabsMain } from './Tabs';
import { TabsList } from './TabsList';
import { TabsTrigger } from './TabsTrigger';
import { TabsTitleText } from './TabsTitleText';
import { TabsContents } from './TabsContents';
import { TabsContent } from './TabsContent';
import { TabsIcon } from './TabsIcon';

import type { ITabsComponentType } from './types';

export const createTabs = <
  TabsProps,
  ListProps,
  TriggerProps,
  TitleTextProps,
  ContentsProps,
  ContentProps,
  IconProps
>({
  Root,
  List,
  Trigger,
  TitleText,
  Contents,
  Content,
  Icon,
}: {
  Root: React.ComponentType<TabsProps>;
  List: React.ComponentType<ListProps>;
  Trigger: React.ComponentType<TriggerProps>;
  TitleText: React.ComponentType<TitleTextProps>;
  Contents: React.ComponentType<ContentsProps>;
  Content: React.ComponentType<ContentProps>;
  Icon: React.ComponentType<IconProps>;
}) => {
  const Tabs = TabsMain(Root) as any;
  Tabs.List = TabsList(List);
  Tabs.Trigger = TabsTrigger(Trigger);
  Tabs.TitleText = TabsTitleText(TitleText);
  Tabs.Contents = TabsContents(Contents);
  Tabs.Content = TabsContent(Content);
  Tabs.Icon = TabsIcon(Icon);

  Tabs.displayName = 'Tabs';
  Tabs.List.displayName = 'Tabs.List';
  Tabs.Trigger.displayName = 'Tabs.Trigger';
  Tabs.TitleText.displayName = 'Tabs.TitleText';
  Tabs.Contents.displayName = 'Tabs.Contents';
  Tabs.Content.displayName = 'Tabs.Content';
  Tabs.Icon.displayName = 'Tabs.Icon';

  return Tabs as ITabsComponentType<
    TabsProps,
    ListProps,
    TriggerProps,
    TitleTextProps,
    ContentsProps,
    ContentProps,
    IconProps
  >;
};
