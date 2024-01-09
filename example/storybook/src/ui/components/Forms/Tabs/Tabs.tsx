import React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabTitle,
  TabPanels,
  TabPanel,
  Text,
} from '@gluestack-ui/themed';

const TabsBasic = () => {
  const [value, setValue] = React.useState('tab2');
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs w="$full" onChange={handleChange} value={value}>
      <TabList loop={false}>
        <Tab value="tab1">
          <TabTitle>Tab 1</TabTitle>
        </Tab>
        <Tab value="tab2">
          <TabTitle>Tab 2</TabTitle>
        </Tab>
        <Tab value="tab3">
          <TabTitle>Tab 3</TabTitle>
        </Tab>
      </TabList>
      <TabPanels mt="$4">
        <TabPanel value="tab1">
          <Text>Hello world 1 Hello world 1</Text>
        </TabPanel>
        <TabPanel value="tab2">
          <Text>Hello world 2</Text>
        </TabPanel>
        <TabPanel value="tab3">
          <Text>Hello world 3</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsBasic;

export { Tabs, TabList, Tab, TabTitle, TabPanels, TabPanel, Text };
