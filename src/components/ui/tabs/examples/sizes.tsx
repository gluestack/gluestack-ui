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

export function SizesExample() {
  return (
    <View className="gap-8">
      {/* Small size */}
      <View>
        <Text className="text-foreground font-semibold mb-2">Small</Text>
        <Tabs defaultValue="tab1" size="sm">
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
              <Text className="text-foreground/70">Small size content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab2">
            <View className="p-4">
              <Text className="text-foreground/70">Small size content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab3">
            <View className="p-4">
              <Text className="text-foreground/70">Small size content</Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>

      {/* Medium size */}
      <View>
        <Text className="text-foreground font-semibold mb-2">Medium</Text>
        <Tabs defaultValue="tab1" size="md">
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
              <Text className="text-foreground/70">Medium size content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab2">
            <View className="p-4">
              <Text className="text-foreground/70">Medium size content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab3">
            <View className="p-4">
              <Text className="text-foreground/70">Medium size content</Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>

      {/* Large size */}
      <View>
        <Text className="text-foreground font-semibold mb-2">Large</Text>
        <Tabs defaultValue="tab1" size="lg">
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
              <Text className="text-foreground/70">Large size content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab2">
            <View className="p-4">
              <Text className="text-foreground/70">Large size content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab3">
            <View className="p-4">
              <Text className="text-foreground/70">Large size content</Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>
    </View>
  );
}
