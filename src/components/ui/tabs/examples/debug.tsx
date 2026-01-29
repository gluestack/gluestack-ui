import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsTriggerText,
  TabsIndicator,
} from '../index';
import { TabsContext } from '@gluestack-ui/core/tabs/creator';

function DebugInfo() {
  const context = React.useContext(TabsContext);

  useEffect(() => {
    if (context) {
      console.log('Tabs Context:', {
        selectedKey: context.selectedKey,
        orientation: context.orientation,
        layoutsCount: context.triggerLayouts.size,
        layouts: Array.from(context.triggerLayouts.entries()),
      });
    }
  }, [context?.selectedKey, context?.triggerLayouts]);

  if (!context) return null;

  return (
    <View className="p-4 bg-muted rounded mb-4">
      <Text className="text-foreground font-semibold mb-2">Debug Info:</Text>
      <Text className="text-foreground/70">
        Selected: {context.selectedKey || 'none'}
      </Text>
      <Text className="text-foreground/70">
        Layouts registered: {context.triggerLayouts.size}
      </Text>
      {Array.from(context.triggerLayouts.entries()).map(([key, layout]) => (
        <Text key={key} className="text-foreground/70 text-xs">
          {key}: x={layout.x.toFixed(1)}, y={layout.y.toFixed(1)}, w=
          {layout.width.toFixed(1)}, h={layout.height.toFixed(1)}
        </Text>
      ))}
    </View>
  );
}

export function DebugExample() {
  return (
    <View className="p-4">
      <Text className="text-foreground font-bold text-xl mb-4">
        Tabs Debug Example
      </Text>

      <Tabs defaultValue="home" variant="underlined" size="md">
        <DebugInfo />

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
          <View className="p-4 border border-border rounded">
            <Text className="text-foreground">Home content</Text>
          </View>
        </TabsContent>
        <TabsContent value="profile">
          <View className="p-4 border border-border rounded">
            <Text className="text-foreground">Profile content</Text>
          </View>
        </TabsContent>
        <TabsContent value="settings">
          <View className="p-4 border border-border rounded">
            <Text className="text-foreground">Settings content</Text>
          </View>
        </TabsContent>
      </Tabs>
    </View>
  );
}
