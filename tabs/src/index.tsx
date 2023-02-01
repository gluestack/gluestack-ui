import type React from 'react';
import { Tab as TabHOC } from './Tab';
import { TabList as TabListMain } from './TabList';
import { TabPanel as TabPanelMain } from './TabPanel';
import { TabPanels as TabPanelsMain } from './TabPanels';
import { Tabs } from './Tabs';
import type { ITabsComponentType } from './types';

export const createTabs = <
  TabsProps,
  TabProps,
  TabPanelsProps,
  TabListProps,
  TabPanelProps
>({
  Root,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
}: {
  Root: React.ComponentType<TabsProps>;
  Tab: React.ComponentType<TabProps>;
  TabPanels: React.ComponentType<TabPanelsProps>;
  TabList: React.ComponentType<TabListProps>;
  TabPanel: React.ComponentType<TabPanelProps>;
}) => {
  const TabsMain = Tabs(Root) as any;
  TabsMain.Tab = TabHOC(Tab);
  TabsMain.TabPanels = TabPanelsMain(TabPanels);
  TabsMain.TabList = TabListMain(TabList);
  TabsMain.TabPanel = TabPanelMain(TabPanel);

  TabsMain.displayName = 'Tabs';
  TabsMain.Tab.displayName = 'Tab';
  TabsMain.TabPanels.displayName = 'Panels';
  TabsMain.TabList.displayName = 'List';
  TabsMain.TabPanel.displayName = 'Panel';

  return TabsMain as ITabsComponentType<
    TabsProps,
    TabProps,
    TabPanelsProps,
    TabListProps,
    TabPanelProps
  >;
};
