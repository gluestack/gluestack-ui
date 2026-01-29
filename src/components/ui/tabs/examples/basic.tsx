import React from 'react';
import { Text, View } from 'react-native';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsTriggerText,
  TabsIndicator,
} from '../index';

export function BasicExample() {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">
          <TabsTriggerText>Home</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="profile">
          <TabsTriggerText>Profile</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="settings">
          <TabsTriggerText>Settings</TabsTriggerText>
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>

      <TabsContent value="home">
        <View className="p-4">
          <Text className="text-foreground">Welcome to the Home tab!</Text>
        </View>
      </TabsContent>
      <TabsContent value="profile">
        <View className="p-4">
          <Text className="text-foreground">Your profile information</Text>
        </View>
      </TabsContent>
      <TabsContent value="settings">
        <View className="p-4">
          <Text className="text-foreground">Settings and preferences</Text>
        </View>
      </TabsContent>
    </Tabs>
  );
}
