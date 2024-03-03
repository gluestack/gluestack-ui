import React, { useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
  TabsTitleText,
  Button,
  View,
  ButtonIcon,
  Text,
} from '@gluestack-ui/themed';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

const ScrollableTabs = () => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7'];
  const [value, setValue] = useState('tab1');
  const [currentSubest, setCurrentSubset] = useState([0, 1, 2]);

  const handleChange = (newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };

  const handlePrevClick = () => {
    if (currentSubest[0] > 0) {
      setCurrentSubset([
        currentSubest[0] - 1,
        currentSubest[1] - 1,
        currentSubest[2] - 1,
      ]);
    }
  };

  const handleNextClick = () => {
    if (currentSubest[currentSubest.length - 1] < tabs.length - 1) {
      setCurrentSubset([
        currentSubest[0] + 1,
        currentSubest[1] + 1,
        currentSubest[2] + 1,
      ]);
    }
  };

  return (
    //@ts-ignore
    <Tabs
      ml="$12"
      w="$full"
      onValueChange={handleChange}
      value={value}
      defaultValue="tab2"
      orientation="horizontal"
      variant="underlined"
    >
      <View flexDirection="row">
        {/* prev */}
        <Button
          height="auto"
          onPress={handlePrevClick}
          bg="$backgroundLight0"
          borderRadius="$none"
          width={58}
          disabled={currentSubest[0] === 0}
          sx={{
            _dark: {
              bg: '$backgroundDark950',
            },
          }}
        >
          <ButtonIcon
            as={ChevronLeft}
            color="$backgroundLight600"
            $dark-color="$backgroundDark200"
            display={currentSubest[0] === 0 ? 'none' : 'flex'}
          />
        </Button>

        <TabsList overflow="hidden">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              tabIndex={0}
              value={`tab${index + 1}`}
              borderBottomWidth={1}
              borderBottomColor="transparent"
              sx={{
                'display': currentSubest.includes(index) ? 'flex' : 'none',
                'bg': '$backgroundLight0',
                ':active': {
                  bg: '$backgroundLight50',
                  borderBottomColor: '$borderPrimary500',
                },
                ':hover': {
                  borderBottomColor: '$borderPrimary600',
                },
                '_dark': {
                  'bg': '$backgroundDark950',
                  ':active': {
                    bg: '$backgroundDark900',
                    borderBottomColor: '$borderPrimary400',
                  },
                  ':hover': {
                    borderBottomColor: '$borderPrimary300',
                  },
                },
              }}
            >
              <TabsTitleText>{tab}</TabsTitleText>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* next */}
        <Button
          height="auto"
          onPress={handleNextClick}
          bg="$backgroundLight0"
          borderRadius="$none"
          width={58}
          disabled={currentSubest[currentSubest.length - 1] === tabs.length - 1}
          sx={{
            _dark: {
              bg: '$backgroundDark950',
            },
          }}
        >
          <ButtonIcon
            as={ChevronRight}
            color="$backgroundLight600"
            $dark-color="$backgroundDark200"
            display={
              currentSubest[currentSubest.length - 1] === tabs.length - 1
                ? 'none'
                : 'flex'
            }
          />
        </Button>
      </View>

      <TabsContents mt="$4">
        <TabsContent value="tab1">
          <Text>Content 1</Text>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Content 2</Text>
        </TabsContent>
        <TabsContent value="tab3">
          <Text>Content 3</Text>
        </TabsContent>
        <TabsContent value="tab4">
          <Text>Content 4</Text>
        </TabsContent>
        <TabsContent value="tab5">
          <Text>Content 5</Text>
        </TabsContent>
        <TabsContent value="tab6">
          <Text>Content 6</Text>
        </TabsContent>
        <TabsContent value="tab7">
          <Text>Content 7</Text>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
};

export default ScrollableTabs;

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
  TabsTitleText,
};
