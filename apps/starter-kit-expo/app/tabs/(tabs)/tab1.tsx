import React from 'react';
import { Text, View } from 'react-native';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsTriggerText,
  TabsIndicator,
} from '@/components/ui/tabs';
import { Center } from '@/components/ui/center';

export default function Tab1() {
  return (
    <Center className="flex-1 bg-background">
      <Tabs defaultValue="account" variant="filled" orentation="vertical">
        <TabsList>
          <TabsIndicator/>
          <TabsTrigger value="account">
            <TabsTriggerText>Account</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="password">
            <TabsTriggerText>Password</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="team">
            <TabsTriggerText>Team</TabsTriggerText>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <View className="p-4">
            <Text className="text-foreground font-semibold mb-2">
              Account Settings
            </Text>
            <Text className="text-foreground/70">
              Manage your account settings and set email preferences.
            </Text>
          </View>
        </TabsContent>
        <TabsContent value="password">
          <View className="p-4">
            <Text className="text-foreground font-semibold mb-2">
              Password Settings
            </Text>
            <Text className="text-foreground/70">
              Change your password and update security settings.
            </Text>
          </View>
        </TabsContent>
        <TabsContent value="team">
          <View className="p-4">
            <Text className="text-foreground font-semibold mb-2">
              Team Settings
            </Text>
            <Text className="text-foreground/70">
              Manage your team members and their access levels.
            </Text>
          </View>
        </TabsContent>
      </Tabs>
    </Center>
  );
}
