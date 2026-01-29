import React from 'react';
import { Text, View } from 'react-native';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsTriggerText,
  TabsIndicator,
} from './index';

export function TabsWithIndicatorExample() {
  return (
    <View className="p-4">
      <Tabs defaultValue="home" variant="underlined" size="md">
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
    </View>
  );
}

export function TabsVerticalExample() {
  return (
    <View className="p-4">
      <Tabs defaultValue="tab1" orientation="vertical" variant="filled" size="md">
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
          <Text className="text-foreground">Content 1</Text>
        </TabsContent>
        <TabsContent value="tab2">
          <Text className="text-foreground">Content 2</Text>
        </TabsContent>
        <TabsContent value="tab3">
          <Text className="text-foreground">Content 3</Text>
        </TabsContent>
      </Tabs>
    </View>
  );
}

export function TabsWithIconsExample() {
  return (
    <View className="p-4">
      <Tabs defaultValue="home" variant="underlined" size="md">
        <TabsList>
          <TabsTrigger value="home">
            <TabsTriggerText>Home</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="search">
            <TabsTriggerText>Search</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="profile">
            <TabsTriggerText>Profile</TabsTriggerText>
          </TabsTrigger>
          <TabsIndicator />
        </TabsList>

        <TabsContent value="home">
          <View className="p-4">
            <Text className="text-foreground">Home content</Text>
          </View>
        </TabsContent>
        <TabsContent value="search">
          <View className="p-4">
            <Text className="text-foreground">Search content</Text>
          </View>
        </TabsContent>
        <TabsContent value="profile">
          <View className="p-4">
            <Text className="text-foreground">Profile content</Text>
          </View>
        </TabsContent>
      </Tabs>
    </View>
  );
}
