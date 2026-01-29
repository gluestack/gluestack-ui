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

export function VariantsExample() {
  return (
    <View className="gap-8">
      {/* Underlined variant */}
      <View>
        <Text className="text-foreground font-semibold mb-2">Underlined</Text>
        <Tabs defaultValue="tab1" variant="underlined">
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
              <Text className="text-foreground/70">Underlined tab content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab2">
            <View className="p-4">
              <Text className="text-foreground/70">Underlined tab content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab3">
            <View className="p-4">
              <Text className="text-foreground/70">Underlined tab content</Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>

      {/* Filled variant */}
      <View>
        <Text className="text-foreground font-semibold mb-2">Filled</Text>
        <Tabs defaultValue="tab1" variant="filled">
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
            <View className="p-4">
              <Text className="text-foreground/70">Filled tab content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab2">
            <View className="p-4">
              <Text className="text-foreground/70">Filled tab content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab3">
            <View className="p-4">
              <Text className="text-foreground/70">Filled tab content</Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>

      {/* Enclosed variant */}
      <View>
        <Text className="text-foreground font-semibold mb-2">Enclosed</Text>
        <Tabs defaultValue="tab1" variant="enclosed">
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
            <View className="p-4 border border-border border-t-0">
              <Text className="text-foreground/70">Enclosed tab content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab2">
            <View className="p-4 border border-border border-t-0">
              <Text className="text-foreground/70">Enclosed tab content</Text>
            </View>
          </TabsContent>
          <TabsContent value="tab3">
            <View className="p-4 border border-border border-t-0">
              <Text className="text-foreground/70">Enclosed tab content</Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>
    </View>
  );
}
