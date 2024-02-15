import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsTitleText,
  TabsContents,
  TabsContent,
  TabsContentText,
} from '@gluestack-ui/themed';

const VerticalTabs = () => {
  const [value, setValue] = React.useState('tab1');
  const handleChange = (newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };

  return (
    // @ts-ignore
    <Tabs
      ml="$12"
      w="$full"
      onValueChange={handleChange}
      value={value}
      defaultValue="tab2"
      orientation="vertical"
      variant="underlined"
    >
      <TabsList minWidth={100}>
        <TabsTrigger
          value="tab1"
          borderLeftWidth={0}
          sx={{
            'bg': '$backgroundLight0',
            ':active': {
              bg: '$backgroundLight50',
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary500',
            },
            ':hover': {
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary600',
            },
            '_dark': {
              'bg': '$backgroundDark950',
              ':active': {
                bg: '$backgroundDark900',
                borderLeftColor: '$borderPrimary400',
              },
              ':hover': {
                borderLeftColor: '$borderPrimary300',
              },
            },
          }}
        >
          <TabsTitleText>Tab 1</TabsTitleText>
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          borderLeftWidth={0}
          sx={{
            'bg': '$backgroundLight0',
            ':active': {
              bg: '$backgroundLight50',
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary500',
            },
            ':hover': {
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary600',
            },
            '_dark': {
              'bg': '$backgroundDark950',
              ':active': {
                bg: '$backgroundDark900',
                borderLeftColor: '$borderPrimary400',
              },
              ':hover': {
                borderLeftColor: '$borderPrimary300',
              },
            },
          }}
        >
          <TabsTitleText>Tab 2</TabsTitleText>
        </TabsTrigger>
        <TabsTrigger
          value="tab3"
          borderLeftWidth={0}
          sx={{
            'bg': '$backgroundLight0',
            ':active': {
              bg: '$backgroundLight50',
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary500',
            },
            ':hover': {
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary600',
            },
            '_dark': {
              'bg': '$backgroundDark950',
              ':active': {
                bg: '$backgroundDark900',
                borderLeftColor: '$borderPrimary400',
              },
              ':hover': {
                borderLeftColor: '$borderPrimary300',
              },
            },
          }}
        >
          <TabsTitleText>Tab 3</TabsTitleText>
        </TabsTrigger>
        <TabsTrigger
          value="tab4"
          borderLeftWidth={0}
          sx={{
            'bg': '$backgroundLight0',
            ':active': {
              bg: '$backgroundLight50',
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary500',
            },
            ':hover': {
              borderLeftWidth: 1,
              borderLeftColor: '$borderPrimary600',
            },
            '_dark': {
              'bg': '$backgroundDark950',
              ':active': {
                bg: '$backgroundDark900',
                borderLeftColor: '$borderPrimary400',
              },
              ':hover': {
                borderLeftColor: '$borderPrimary300',
              },
            },
          }}
        >
          <TabsTitleText>Tab 4</TabsTitleText>
        </TabsTrigger>
      </TabsList>
      <TabsContents mt="$4">
        <TabsContent value="tab1">
          <TabsContentText>Content 1</TabsContentText>
        </TabsContent>
        <TabsContent value="tab2">
          <TabsContentText>Content 2</TabsContentText>
        </TabsContent>
        <TabsContent value="tab3">
          <TabsContentText>Content 3</TabsContentText>
        </TabsContent>
        <TabsContent value="tab4">
          <TabsContentText>Content 4</TabsContentText>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
};

export default VerticalTabs;

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsTitleText,
  TabsContents,
  TabsContent,
  TabsContentText,
};
