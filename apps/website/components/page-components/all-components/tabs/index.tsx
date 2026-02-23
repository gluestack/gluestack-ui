import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Tabs } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsContentWrapper } from '@/components/ui/tabs';
import { TabsTriggerText } from '@/components/ui/tabs';
import { TabsIndicator } from '@/components/ui/tabs';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
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

      <TabsContentWrapper>
        <TabsContent value="home">
          <Box className="p-4">
            <Text className="text-foreground">Welcome to the Home tab!</Text>
          </Box>
        </TabsContent>
        <TabsContent value="profile">
          <Box className="p-4">
            <Text className="text-foreground">Your profile information</Text>
          </Box>
        </TabsContent>
        <TabsContent value="settings">
          <Box className="p-4">
            <Text className="text-foreground">Settings and preferences</Text>
          </Box>
        </TabsContent>
      </TabsContentWrapper>
    </Tabs>
  );
}`}
      argTypes={{}}
      reactLive={{ Tabs, TabsList, TabsTrigger, TabsContent, TabsContentWrapper, TabsTriggerText, TabsIndicator, Box, Text }}
      
    />
  );
}