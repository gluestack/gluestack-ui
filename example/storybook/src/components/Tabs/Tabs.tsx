import React from 'react';
import { Tabs, Text } from '../../ui-components';
import Wrapper from '../Wrapper';

export const TabsStory = () => {
  return (
    <Wrapper>
      <Tabs w="$full" value="tab1">
        <Tabs.TabList>
          <Tabs.Tab value="tab1">
            <Tabs.TabTitle>Tab 1</Tabs.TabTitle>
          </Tabs.Tab>
          <Tabs.Tab value="tab2">
            <Tabs.TabTitle>Tab 2</Tabs.TabTitle>
          </Tabs.Tab>
          <Tabs.Tab value="tab3">
            <Tabs.TabTitle>Tab 3</Tabs.TabTitle>
          </Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels mt="$4">
          <Tabs.TabPanel value="tab1">
            <Text>Hello world 1</Text>
          </Tabs.TabPanel>
          <Tabs.TabPanel value="tab2">
            <Text>Hello world 2</Text>
          </Tabs.TabPanel>
          <Tabs.TabPanel value="tab3">
            <Text>Hello world 3</Text>
          </Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export { Tabs, Text };
