import {
  Root,
  Tab,
  TabList as List,
  TabPanel as Panel,
  TabPanels as Panels,
} from './styled-component';
import { createTabs } from '@universa11y/tabs';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Text } from 'react-native';

const TabsTemp = createTabs({
  Root,
  Tab,
  List,
  Panel,
  Panels,
});

export const Tabs = () => {
  return (
    <Wrapper>
      <TabsTemp w="full" value="tab1">
        <TabsTemp.TabList>
          <TabsTemp.Tab value="tab1">
            <Text>Tab 1</Text>
          </TabsTemp.Tab>
          <TabsTemp.Tab value="tab2">
            <Text>Tab 2</Text>
          </TabsTemp.Tab>
          <TabsTemp.Tab value="tab3">
            <Text>Tab 3</Text>
          </TabsTemp.Tab>
        </TabsTemp.TabList>
        <TabsTemp.TabPanels mt="$4">
          <TabsTemp.TabPanel value="tab1">Hello world 1</TabsTemp.TabPanel>
          <TabsTemp.TabPanel value="tab2">Hello world 2</TabsTemp.TabPanel>
          <TabsTemp.TabPanel value="tab3">Hello world 3</TabsTemp.TabPanel>
        </TabsTemp.TabPanels>
      </TabsTemp>
    </Wrapper>
  );
};

export default Tabs;
