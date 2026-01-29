import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsTriggerText,
  TabsIndicator,
} from '../index';
import { Button, ButtonText } from '../../button';

export function ControlledExample() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <View className="gap-4">
      <View className="flex-row gap-2">
        <Button size="sm" onPress={() => setActiveTab('tab1')}>
          <ButtonText>Go to Tab 1</ButtonText>
        </Button>
        <Button size="sm" onPress={() => setActiveTab('tab2')}>
          <ButtonText>Go to Tab 2</ButtonText>
        </Button>
        <Button size="sm" onPress={() => setActiveTab('tab3')}>
          <ButtonText>Go to Tab 3</ButtonText>
        </Button>
      </View>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
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
          <TabsIndicator />
        </TabsList>

        <TabsContent value="tab1">
          <View className="p-4">
            <Text className="text-foreground">Content for Tab 1</Text>
            <Text className="text-foreground/70 mt-2">
              Active tab: {activeTab}
            </Text>
          </View>
        </TabsContent>
        <TabsContent value="tab2">
          <View className="p-4">
            <Text className="text-foreground">Content for Tab 2</Text>
            <Text className="text-foreground/70 mt-2">
              Active tab: {activeTab}
            </Text>
          </View>
        </TabsContent>
        <TabsContent value="tab3">
          <View className="p-4">
            <Text className="text-foreground">Content for Tab 3</Text>
            <Text className="text-foreground/70 mt-2">
              Active tab: {activeTab}
            </Text>
          </View>
        </TabsContent>
      </Tabs>
    </View>
  );
}
