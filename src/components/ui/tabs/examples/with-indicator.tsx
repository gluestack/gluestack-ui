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

export function WithIndicatorExample() {
  return (
    <Tabs defaultValue="account" variant="underlined">
      <TabsList>
        <TabsTrigger value="account">
          <TabsTriggerText>Account</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="password">
          <TabsTriggerText>Password</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="team">
          <TabsTriggerText>Team</TabsTriggerText>
        </TabsTrigger>
        <TabsIndicator />
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
  );
}
