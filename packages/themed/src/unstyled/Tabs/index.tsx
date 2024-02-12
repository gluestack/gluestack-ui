import { createTabs } from '@gluestack-ui/tabs';
import {
  Root,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  TabTitle,
  TabIcon,
} from './styled-components';

export const Tabs = createTabs({
  Root,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  TabTitle,
  TabIcon,
});
export const TabsTab = Tabs.Tab;
export const TabsTabPanels = Tabs.TabPanels;
export const TabsTabPanel = Tabs.TabPanel;
export const TabsTabList = Tabs.TabList;
export const TabsTabTitle = Tabs.TabTitle;
export const TabsTabIcon = Tabs.TabIcon;
