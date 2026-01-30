import React from 'react';
import { Text, View } from 'react-native';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContentWrapper,
  TabsTriggerText,
  TabsIndicator,
} from '@/components/ui/tabs';
import { Center } from '@/components/ui/center';

export default function Tab1() {
  return (
    <Center className="flex-1 bg-background px-4">
      <Tabs defaultValue="account" variant="filled" isScrollable>
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

          <TabsTrigger value="billing">
            <TabsTriggerText>Billing</TabsTriggerText>
          </TabsTrigger>

          <TabsTrigger value="notifications">
            <TabsTriggerText>Notifications</TabsTriggerText>
          </TabsTrigger>

          <TabsTrigger value="security">
            <TabsTriggerText>Security</TabsTriggerText>
          </TabsTrigger>

          <TabsTrigger value="integrations">
            <TabsTriggerText>Integrations</TabsTriggerText>
          </TabsTrigger>

          <TabsTrigger value="appearance">
            <TabsTriggerText>Appearance</TabsTriggerText>
          </TabsTrigger>

          <TabsIndicator />
        </TabsList>

        <TabsContentWrapper className="border border-input">
          <TabsContent value="account">
            <View className="p-4">
              <Text className="text-foreground font-semibold mb-2">
                Account Settings
              </Text>
              <Text className="text-foreground/70">
                Manage your account settings and set email preferences. Manage
                your account settings and set email preferences. Manage your
                account settings and set email preferences. Manage your account
                settings and set email preferences.
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

          <TabsContent value="billing">
            <View className="p-4">
              <Text className="text-foreground font-semibold mb-2">
                Billing Settings
              </Text>
              <Text className="text-foreground/70">
                Manage your subscription and payment methods.
              </Text>
            </View>
          </TabsContent>

          <TabsContent value="notifications">
            <View className="p-4">
              <Text className="text-foreground font-semibold mb-2">
                Notification Settings
              </Text>
              <Text className="text-foreground/70">
                Control how and when you receive notifications.
              </Text>
            </View>
          </TabsContent>

          <TabsContent value="security">
            <View className="p-4">
              <Text className="text-foreground font-semibold mb-2">
                Security Settings
              </Text>
              <Text className="text-foreground/70">
                Manage two-factor authentication and login alerts.
              </Text>
            </View>
          </TabsContent>

          <TabsContent value="integrations">
            <View className="p-4">
              <Text className="text-foreground font-semibold mb-2">
                Integrations
              </Text>
              <Text className="text-foreground/70">
                Connect third-party services to your account.
              </Text>
            </View>
          </TabsContent>

          <TabsContent value="appearance">
            <View className="p-4">
              <Text className="text-foreground font-semibold mb-2">
                Appearance Settings
              </Text>
              <Text className="text-foreground/70">
                Customize theme, colors, and layout preferences.
              </Text>
            </View>
          </TabsContent>
        </TabsContentWrapper>
      </Tabs>
    </Center>
  );
}
