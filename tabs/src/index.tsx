import type React from 'react';
import { Tab as TabHOC } from './Tab';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
import { TabPanels } from './TabPanels';
import { Tabs } from './Tabs';

export const createTabs = <
  StyledTabsProps,
  StyledTabProps,
  StyledTabPanelsProps,
  StyledTabListProps,
  StyledTabPanelProps
>({
  Root,
  Tab,
  Panels,
  List,
  Panel,
}: {
  Root: React.ComponentType<StyledTabsProps>;
  Tab: React.ComponentType<StyledTabProps>;
  Panels: React.ComponentType<StyledTabPanelsProps>;
  List: React.ComponentType<StyledTabListProps>;
  Panel: React.ComponentType<StyledTabPanelProps>;
}) => {
  const TabsMain = Tabs(Root) as any;
  TabsMain.Tab = TabHOC(Tab);
  TabsMain.TabPanels = TabPanels(Panels);
  TabsMain.TabList = TabList(List);
  TabsMain.TabPanel = TabPanel(Panel);

  TabsMain.displayName = 'Tabs';
  TabsMain.Tab.displayName = 'Tab';
  TabsMain.TabPanels.displayName = 'Panels';
  TabsMain.TabList.displayName = 'List';
  TabsMain.TabPanel.displayName = 'Panel';

  return TabsMain;
};
