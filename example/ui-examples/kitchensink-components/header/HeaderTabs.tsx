import React from 'react';
import { SearchIcon } from '../../gluestack-ui-components/core/Icons/Icons';
import { HStack, Icon, Pressable, Text } from '../../gluestack-ui-components';

const HeaderTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState('Anywhere');
  return (
    <HStack h="$20" alignItems="center" justifyContent="space-between">
      <HStack
        rounded="$full"
        p="$1.5"
        alignItems="center"
        borderWidth={1}
        borderColor="$borderLight200"
        sx={{ _dark: { borderColor: '$borderDark900' } }}
      >
        <Pressable
          rounded="$full"
          bg={
            selectedTab === 'Anywhere' ? '$backgroundLight100' : 'transparent'
          }
          sx={{
            _dark: {
              bg:
                selectedTab === 'Anywhere'
                  ? '$backgroundDark700'
                  : 'transparent',
            },
          }}
          onPress={() => setSelectedTab('Anywhere')}
          px="$3"
          py="$1.5"
        >
          <Text size="sm" fontWeight="$medium">
            Anywhere
          </Text>
        </Pressable>
        <Pressable
          rounded="$full"
          px="$3"
          py="$1.5"
          bg={selectedTab === 'Anyweek' ? '$backgroundLight100' : 'transparent'}
          sx={{
            _dark: {
              bg:
                selectedTab === 'Anyweek'
                  ? '$backgroundDark700'
                  : 'transparent',
            },
          }}
          onPress={() => setSelectedTab('Anyweek')}
        >
          <Text size="sm" fontWeight="$medium">
            Anyweek
          </Text>
        </Pressable>
        <Pressable
          rounded="$full"
          px="$3"
          py="$1.5"
          bg={
            selectedTab === 'Add guests' ? '$backgroundLight100' : 'transparent'
          }
          sx={{
            _dark: {
              bg:
                selectedTab === 'Add guests'
                  ? '$backgroundDark700'
                  : 'transparent',
            },
          }}
          onPress={() => setSelectedTab('Add guests')}
        >
          <Text size="sm" fontWeight="$medium">
            Add guests
          </Text>
        </Pressable>
        <Pressable ml="$3" p="$2" bg="$primary500" rounded="$full">
          <Icon as={SearchIcon} color="white" w="$4" h="$4" />
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default HeaderTabs;
