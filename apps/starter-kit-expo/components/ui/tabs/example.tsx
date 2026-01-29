import React from 'react';
import { Text, View } from 'react-native';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsTriggerText,
} from './index';

export function TabsExample() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">
          <TabsTriggerText>Tab 1</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <TabsTriggerText>Tab 2</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="tab3">
          <TabsTriggerText>Tab 3</TabsTriggerText>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <Text>Content for Tab 1</Text>
      </TabsContent>
      <TabsContent value="tab2">
        <Text>Content for Tab 2</Text>
      </TabsContent>
      <TabsContent value="tab3">
        <Text>Content for Tab 3</Text>
      </TabsContent>
    </Tabs>
  );
}
