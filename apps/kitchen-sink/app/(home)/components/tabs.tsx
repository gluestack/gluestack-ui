import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContentWrapper, TabsTriggerText, TabsIndicator, TabsTriggerIcon } from '@/components/ui/tabs'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { SearchIcon, MailIcon, StarIcon, BellIcon } from '@/components/ui/icon'
import { Button, ButtonText } from '@/components/ui/button'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
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
  )
};

const ExampleBasic = () => {
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
  )
};

const ExampleWithIndicator = () => {
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

      <TabsContentWrapper>
        <TabsContent value="account">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-2">
              Account Settings
            </Text>
            <Text className="text-foreground/70">
              Manage your account settings and set email preferences.
            </Text>
          </Box>
        </TabsContent>
        <TabsContent value="password">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-2">
              Password Settings
            </Text>
            <Text className="text-foreground/70">
              Change your password and update security settings.
            </Text>
          </Box>
        </TabsContent>
        <TabsContent value="team">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-2">
              Team Settings
            </Text>
            <Text className="text-foreground/70">
              Manage your team members and their access levels.
            </Text>
          </Box>
        </TabsContent>
      </TabsContentWrapper>
    </Tabs>
  )
};

const ExampleVertical = () => {
return (
    <Tabs defaultValue="overview" orientation="vertical" variant="filled">
      <Box className="flex-row gap-4">
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

        <Box className="flex-1">
          <TabsContentWrapper>
            <TabsContent value="overview">
              <Box className="p-4 bg-muted rounded-lg">
                <Text className="text-foreground font-semibold mb-2">Overview</Text>
                <Text className="text-foreground/70">
                  View a summary of your account activity and statistics.
                </Text>
              </Box>
            </TabsContent>
            <TabsContent value="analytics">
              <Box className="p-4 bg-muted rounded-lg">
                <Text className="text-foreground font-semibold mb-2">Analytics</Text>
                <Text className="text-foreground/70">
                  Detailed analytics and insights about your performance.
                </Text>
              </Box>
            </TabsContent>
            <TabsContent value="reports">
              <Box className="p-4 bg-muted rounded-lg">
                <Text className="text-foreground font-semibold mb-2">Reports</Text>
                <Text className="text-foreground/70">
                  Generate and download custom reports.
                </Text>
              </Box>
            </TabsContent>
            <TabsContent value="notifications">
              <Box className="p-4 bg-muted rounded-lg">
                <Text className="text-foreground font-semibold mb-2">Notifications</Text>
                <Text className="text-foreground/70">
                  Manage your notification preferences.
                </Text>
              </Box>
            </TabsContent>
          </TabsContentWrapper>
        </Box>
      </Box>
    </Tabs>
  )
};

const ExampleWithIcons = () => {
return (
    <Tabs defaultValue="explore" variant="filled">
      <TabsList>
        <TabsTrigger value="explore">
          <TabsTriggerIcon as={SearchIcon} />
          <TabsTriggerText>Explore</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="messages">
          <TabsTriggerIcon as={MailIcon} />
          <TabsTriggerText>Messages</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="favourites">
          <TabsTriggerIcon as={StarIcon} />
          <TabsTriggerText>Favourites</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <TabsTriggerIcon as={BellIcon} />
          <TabsTriggerText>Alerts</TabsTriggerText>
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>

      <TabsContentWrapper>
        <TabsContent value="explore">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Explore</Text>
            <Text className="text-foreground/70">
              Discover new content and trending topics.
            </Text>
          </Box>
        </TabsContent>
        <TabsContent value="messages">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Messages</Text>
            <Text className="text-foreground/70">
              Your recent conversations and direct messages.
            </Text>
          </Box>
        </TabsContent>
        <TabsContent value="favourites">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Favourites</Text>
            <Text className="text-foreground/70">
              Items and pages you have starred for quick access.
            </Text>
          </Box>
        </TabsContent>
        <TabsContent value="notifications">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Alerts</Text>
            <Text className="text-foreground/70">
              Stay up to date with your latest notifications.
            </Text>
          </Box>
        </TabsContent>
      </TabsContentWrapper>
    </Tabs>
  )
};

const ExampleVariants = () => {
return (
    <Box className="gap-8">
      <Box>
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
          <TabsContentWrapper>
            <TabsContent value="tab1">
              <Box className="p-4">
                <Text className="text-foreground/70">Underlined tab content 1</Text>
              </Box>
            </TabsContent>
            <TabsContent value="tab2">
              <Box className="p-4">
                <Text className="text-foreground/70">Underlined tab content 2</Text>
              </Box>
            </TabsContent>
            <TabsContent value="tab3">
              <Box className="p-4">
                <Text className="text-foreground/70">Underlined tab content 3</Text>
              </Box>
            </TabsContent>
          </TabsContentWrapper>
        </Tabs>
      </Box>

      <Box>
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
            <TabsIndicator />
          </TabsList>
          <TabsContentWrapper>
            <TabsContent value="tab1">
              <Box className="p-4">
                <Text className="text-foreground/70">Filled tab content 1</Text>
              </Box>
            </TabsContent>
            <TabsContent value="tab2">
              <Box className="p-4">
                <Text className="text-foreground/70">Filled tab content 2</Text>
              </Box>
            </TabsContent>
            <TabsContent value="tab3">
              <Box className="p-4">
                <Text className="text-foreground/70">Filled tab content 3</Text>
              </Box>
            </TabsContent>
          </TabsContentWrapper>
        </Tabs>
      </Box>
    </Box>
  )
};

const ExampleScrollable = () => {
return (
    <Tabs defaultValue="monday" variant="underlined">
      <TabsList>
        <TabsTrigger value="monday">
          <TabsTriggerText>Monday</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="tuesday">
          <TabsTriggerText>Tuesday</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="wednesday">
          <TabsTriggerText>Wednesday</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="thursday">
          <TabsTriggerText>Thursday</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="friday">
          <TabsTriggerText>Friday</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="saturday">
          <TabsTriggerText>Saturday</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="sunday">
          <TabsTriggerText>Sunday</TabsTriggerText>
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>

      <TabsContentWrapper>
        <TabsContent value="monday">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Monday</Text>
            <Text className="text-foreground/70">Start the week strong with your planned tasks.</Text>
          </Box>
        </TabsContent>
        <TabsContent value="tuesday">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Tuesday</Text>
            <Text className="text-foreground/70">Keep the momentum going with focused work.</Text>
          </Box>
        </TabsContent>
        <TabsContent value="wednesday">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Wednesday</Text>
            <Text className="text-foreground/70">Midweek checkpoint — review your progress.</Text>
          </Box>
        </TabsContent>
        <TabsContent value="thursday">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Thursday</Text>
            <Text className="text-foreground/70">Push through with energy to finish the week.</Text>
          </Box>
        </TabsContent>
        <TabsContent value="friday">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Friday</Text>
            <Text className="text-foreground/70">Wrap up the week and celebrate your wins.</Text>
          </Box>
        </TabsContent>
        <TabsContent value="saturday">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Saturday</Text>
            <Text className="text-foreground/70">Rest, recharge, and enjoy your weekend.</Text>
          </Box>
        </TabsContent>
        <TabsContent value="sunday">
          <Box className="p-4">
            <Text className="text-foreground font-semibold mb-1">Sunday</Text>
            <Text className="text-foreground/70">Prepare and plan for the upcoming week ahead.</Text>
          </Box>
        </TabsContent>
      </TabsContentWrapper>
    </Tabs>
  )
};

const ExampleControlled = () => {
const [activeTab, setActiveTab] = React.useState('tab1');

  return (
    <Box className="gap-4">
      <Box className="flex-row gap-2">
        <Button size="sm" onPress={() => setActiveTab('tab1')}>
          <ButtonText>Go to Tab 1</ButtonText>
        </Button>
        <Button size="sm" onPress={() => setActiveTab('tab2')}>
          <ButtonText>Go to Tab 2</ButtonText>
        </Button>
        <Button size="sm" onPress={() => setActiveTab('tab3')}>
          <ButtonText>Go to Tab 3</ButtonText>
        </Button>
      </Box>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
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

        <TabsContentWrapper>
          <TabsContent value="tab1">
            <Box className="p-4">
              <Text className="text-foreground">Content for Tab 1</Text>
              <Text className="text-foreground/70 mt-2">
                Active tab: {activeTab}
              </Text>
            </Box>
          </TabsContent>
          <TabsContent value="tab2">
            <Box className="p-4">
              <Text className="text-foreground">Content for Tab 2</Text>
              <Text className="text-foreground/70 mt-2">
                Active tab: {activeTab}
              </Text>
            </Box>
          </TabsContent>
          <TabsContent value="tab3">
            <Box className="p-4">
              <Text className="text-foreground">Content for Tab 3</Text>
              <Text className="text-foreground/70 mt-2">
                Active tab: {activeTab}
              </Text>
            </Box>
          </TabsContent>
        </TabsContentWrapper>
      </Tabs>
    </Box>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "with-indicator",
    label: "With Indicator",
    content: <ExampleWithIndicator />,
  },
  {
    value: "vertical",
    label: "Vertical",
    content: <ExampleVertical />,
  },
  {
    value: "with-icons",
    label: "With Icons",
    content: <ExampleWithIcons />,
  },
  {
    value: "variants",
    label: "Variants",
    content: <ExampleVariants />,
  },
  {
    value: "scrollable",
    label: "Scrollable",
    content: <ExampleScrollable />,
  },
  {
    value: "controlled",
    label: "Controlled",
    content: <ExampleControlled />,
  }
];

export default function TabsScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}