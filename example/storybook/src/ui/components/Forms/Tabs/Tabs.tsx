import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsTitleText,
  TabsContents,
  TabsContent,
  Text,
} from '@gluestack-ui/themed';

const TabsBasic = () => {
  const [value, setValue] = React.useState('tab1');
  const handleChange = (newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };

  return (
    // @ts-ignore
    <Tabs
      ml="$12"
      w="$full"
      onValueChange={handleChange}
      value={value}
      defaultValue="tab2"
      variant="underlined"
    >
      <TabsList>
        <TabsTrigger value="tab1">
          <Text>Teams</Text>
        </TabsTrigger>
        <TabsTrigger value="tab2" isDisabled={true}>
          <Text>Settings</Text>
        </TabsTrigger>
        <TabsTrigger value="tab3">
          <Text>Theme</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContents mt="$4">
        <TabsContent value="tab1">
          <Text>Content 1</Text>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Content 2</Text>
        </TabsContent>
        <TabsContent value="tab3">
          <Text>Content 3</Text>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
};

export default TabsBasic;

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsTitleText,
  TabsContents,
  TabsContent,
};
