import React from 'react';
import {
  Tabs,
  TabsTabList,
  TabsTab,
  TabsTabTitle,
  TabsTabPanels,
  TabsTabPanel,
  Text,
  Center,
} from '../../../ui-components';

const TabsStory = () => {
  return (
    <Tabs w="$full" value="tab1">
      <TabsTabList>
        <TabsTab value="tab1">
          <TabsTabTitle>Tab 1</TabsTabTitle>
        </TabsTab>
        <TabsTab value="tab2">
          <TabsTabTitle>Tab 2</TabsTabTitle>
        </TabsTab>
        <TabsTab value="tab3">
          <TabsTabTitle>Tab 3</TabsTabTitle>
        </TabsTab>
      </TabsTabList>
      <TabsTabPanels mt="$4">
        <TabsTabPanel value="tab1">
          <Text>Hello world 1</Text>
        </TabsTabPanel>
        <TabsTabPanel value="tab2">
          <Text>Hello world 2</Text>
        </TabsTabPanel>
        <TabsTabPanel value="tab3">
          <Text>Hello world 3</Text>
        </TabsTabPanel>
      </TabsTabPanels>
    </Tabs>
  );
};

export default TabsStory;

export {
  Tabs,
  TabsTabList,
  TabsTab,
  TabsTabTitle,
  TabsTabPanels,
  TabsTabPanel,
  Text,
  Center,
};
