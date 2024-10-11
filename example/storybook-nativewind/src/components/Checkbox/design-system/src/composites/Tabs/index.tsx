//@ts-nocheck
import Root from './styled-components/Root';
import Tab from './styled-components/Tab';
import TabPanels from './styled-components/TabPanels';
import TabList from './styled-components/TabList';
import TabPanel from './styled-components/TabPanel';
import TabTitle from './styled-components/TabTitle';
import TabIcon from './styled-components/TabIcon';
import { createTabs } from '@gluestack-ui/tabs';
export const Tabs = createTabs({
  Root,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
  TabTitle,
  TabIcon,
});
