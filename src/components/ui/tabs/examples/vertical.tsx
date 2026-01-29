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

export function VerticalExample() {
  return (
    <Tabs defaultValue="overview" orientation="vertical" variant="filled">
      <View className="flex-row gap-4">
        <TabsList>
          <TabsTrigger value="overview">
            <TabsTriggerText>Overview</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <TabsTriggerText>Analytics</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="reports">
            <TabsTriggerText>Reports</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <TabsTriggerText>Notifications</TabsTriggerText>
          </TabsTrigger>
          <TabsIndicator />
        </TabsList>

        <View className="flex-1">
          <TabsContent value="overview">
            <View className="p-4 bg-muted rounded-lg">
              <Text className="text-foreground font-semibold mb-2">
                Overview
              </Text>
              <Text className="text-foreground/70">
                View a summary of your account activity and statistics.
              </Text>
            </View>
          </TabsContent>
          <TabsContent value="analytics">
            <View className="p-4 bg-muted rounded-lg">
              <Text className="text-foreground font-semibold mb-2">
                Analytics
              </Text>
              <Text className="text-foreground/70">
                Detailed analytics and insights about your performance.
              </Text>
            </View>
          </TabsContent>
          <TabsContent value="reports">
            <View className="p-4 bg-muted rounded-lg">
              <Text className="text-foreground font-semibold mb-2">Reports</Text>
              <Text className="text-foreground/70">
                Generate and download custom reports.
              </Text>
            </View>
          </TabsContent>
          <TabsContent value="notifications">
            <View className="p-4 bg-muted rounded-lg">
              <Text className="text-foreground font-semibold mb-2">
                Notifications
              </Text>
              <Text className="text-foreground/70">
                Manage your notification preferences.
              </Text>
            </View>
          </TabsContent>
        </View>
      </View>
    </Tabs>
  );
}
