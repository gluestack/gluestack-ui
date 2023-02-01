import { styled } from '@dank-style/react';
import { Tab } from './StyledTab';
import { TabList } from './StyledTabList';
import { TabPanel } from './StyledTabPanel';
import { TabPanels } from './StyledTabPanels';
import { View } from 'react-native';

const Tabs = styled(View, {}, {});
export { Tabs as Root, Tab, TabList, TabPanel, TabPanels };
export default Tabs;
