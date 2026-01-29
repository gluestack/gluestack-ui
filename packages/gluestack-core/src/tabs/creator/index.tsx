import { Tabs as TabsMain } from './Tabs';
import { TabsList } from './TabsList';
import { TabsTrigger } from './TabsTrigger';
import { TabsContent } from './TabsContent';
import { TabsTriggerText } from './TabsTriggerText';
import { TabsTriggerIcon } from './TabsTriggerIcon';
import { TabsIndicator } from './TabsIndicator';

export function createTabs<
  TabsStyledProps,
  ListStyledProps,
  TriggerStyledProps,
  ContentStyledProps,
  TriggerTextStyledProps,
  TriggerIconStyledProps,
  IndicatorStyledProps
>({
  Root,
  List,
  Trigger,
  Content,
  TriggerText,
  TriggerIcon,
  Indicator,
}: {
  Root: React.ComponentType<TabsStyledProps>;
  List: React.ComponentType<ListStyledProps>;
  Trigger: React.ComponentType<TriggerStyledProps>;
  Content: React.ComponentType<ContentStyledProps>;
  TriggerText: React.ComponentType<TriggerTextStyledProps>;
  TriggerIcon: React.ComponentType<TriggerIconStyledProps>;
  Indicator: React.ComponentType<IndicatorStyledProps>;
}) {
  const TabsTemp = TabsMain(Root);
  const TabsListTemp = TabsList(List);
  const TabsTriggerTemp = TabsTrigger(Trigger);
  const TabsContentTemp = TabsContent(Content);
  const TabsTriggerTextTemp = TabsTriggerText(TriggerText);
  const TabsTriggerIconTemp = TabsTriggerIcon(TriggerIcon);
  const TabsIndicatorTemp = TabsIndicator(Indicator);

  const TabsComponent = TabsTemp as typeof TabsTemp & {
    List: typeof TabsListTemp;
    Trigger: typeof TabsTriggerTemp;
    Content: typeof TabsContentTemp;
    TriggerText: typeof TabsTriggerTextTemp;
    TriggerIcon: typeof TabsTriggerIconTemp;
    Indicator: typeof TabsIndicatorTemp;
  };

  TabsComponent.List = TabsListTemp;
  TabsComponent.Trigger = TabsTriggerTemp;
  TabsComponent.Content = TabsContentTemp;
  TabsComponent.TriggerText = TabsTriggerTextTemp;
  TabsComponent.TriggerIcon = TabsTriggerIconTemp;
  TabsComponent.Indicator = TabsIndicatorTemp;

  TabsComponent.displayName = 'Tabs';
  TabsListTemp.displayName = 'Tabs.List';
  TabsTriggerTemp.displayName = 'Tabs.Trigger';
  TabsContentTemp.displayName = 'Tabs.Content';
  TabsTriggerTextTemp.displayName = 'Tabs.TriggerText';
  TabsTriggerIconTemp.displayName = 'Tabs.TriggerIcon';
  TabsIndicatorTemp.displayName = 'Tabs.Indicator';

  return TabsComponent;
}

// Export individual components for testing
export { TabsMain, TabsList, TabsTrigger, TabsContent, TabsTriggerText, TabsTriggerIcon, TabsIndicator };
export * from './Context';
export * from './types';
