import { createTabs } from '@gluestack-ui/tabs';
import {
  Root,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  StyledTabList,
  StyledTabTitle,
  StyledTabIcon,
} from './styled-components';

export const Tabs = createTabs({
  Root,
  Tab: StyledTab,
  TabPanels: StyledTabPanels,
  TabPanel: StyledTabPanel,
  TabList: StyledTabList,
  TabTitle: StyledTabTitle,
  TabIcon: StyledTabIcon,
});

export const Tab = Tabs.Tab;
export const TabPanels = Tabs.TabPanels;
export const TabPanel = Tabs.TabPanel;
export const TabList = Tabs.TabList;
export const TabTitle = Tabs.TabTitle;
export const TabIcon = Tabs.TabIcon;
