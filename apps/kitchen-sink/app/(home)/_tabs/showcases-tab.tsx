import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContentWrapper,
  TabsTriggerText,
  TabsIndicator,
} from '@/components/ui/tabs';
import { Box } from '@/components/ui/box';
import { ScrollView, View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ScrollView className="mx-10">
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
    </ScrollView>
  );
}
