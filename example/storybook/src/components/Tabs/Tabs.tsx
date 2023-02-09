import Root from './styled-components/Root';
import Tab from './styled-components/Tab';
import TabPanels from './styled-components/TabPanels';
import TabList from './styled-components/TabList';
import TabPanel from './styled-components/TabPanel';
import TabTitle from './styled-components/TabTitle';
import TabIcon from './styled-components/TabIcon';
import { createTabs } from '@universa11y/tabs';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Text } from 'react-native';

const TabsTemp = createTabs({
  Root,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  TabTitle,
  TabIcon,
});

export const Tabs = () => {
  return (
    <Wrapper>
      <TabsTemp w="$full" value="tab1">
        <TabsTemp.TabList>
          <TabsTemp.Tab value="tab1">
            <TabsTemp.TabTitle>Tab 1</TabsTemp.TabTitle>
          </TabsTemp.Tab>
          <TabsTemp.Tab value="tab2">
            <TabsTemp.TabTitle>Tab 2</TabsTemp.TabTitle>
          </TabsTemp.Tab>
          <TabsTemp.Tab value="tab3">
            <TabsTemp.TabTitle>Tab 3</TabsTemp.TabTitle>
          </TabsTemp.Tab>
        </TabsTemp.TabList>
        <TabsTemp.TabPanels mt="$4">
          <TabsTemp.TabPanel value="tab1">
            <Text>Hello world 1</Text>
          </TabsTemp.TabPanel>
          <TabsTemp.TabPanel value="tab2">
            <Text>Hello world 2</Text>
          </TabsTemp.TabPanel>
          <TabsTemp.TabPanel value="tab3">
            <Text>Hello world 3</Text>
          </TabsTemp.TabPanel>
        </TabsTemp.TabPanels>
      </TabsTemp>
    </Wrapper>
  );
};

export default Tabs;
