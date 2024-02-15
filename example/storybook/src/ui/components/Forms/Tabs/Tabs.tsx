import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsTitleText,
  TabsContents,
  TabsContent,
  TabsContentText,
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
      orientation="horizontal"
      variant="underlined"
    >
      <TabsList>
        <TabsTrigger value="tab1">
          <TabsTitleText>Teams</TabsTitleText>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <TabsTitleText>Settings</TabsTitleText>
        </TabsTrigger>
        <TabsTrigger value="tab3">
          <TabsTitleText>Theme</TabsTitleText>
        </TabsTrigger>
      </TabsList>
      <TabsContents mt="$4">
        <TabsContent value="tab1">
          <TabsContentText>Content 1</TabsContentText>
        </TabsContent>
        <TabsContent value="tab2">
          <TabsContentText>Content 2</TabsContentText>
        </TabsContent>
        <TabsContent value="tab3">
          <TabsContentText>Content 3</TabsContentText>
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
  TabsContentText,
};
