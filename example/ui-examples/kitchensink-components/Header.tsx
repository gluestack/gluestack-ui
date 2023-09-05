import React from 'react';
import { Box, HStack, Icon, Input } from '../gluestack-ui-components';
import { SearchIcon } from '../gluestack-ui-components/core/Icons/Icons';
import HeaderTabs from './header/HeaderTabs';
import HomestayLogo from './header/HomestayLogo';
import ToggleMode from './header/ToggleMode';
import UserProfile from './header/UserProfile';

const Header = React.memo(() => {
  return (
    <Box>
      {/* big screen */}
      <Box
        px="$16"
        w="100%"
        borderBottomWidth={1}
        display="none"
        sx={{
          '@md': {
            display: 'flex',
          },
          '_light': { borderColor: '$borderLight100' },
          '_dark': { borderColor: '$borderDark900' },
        }}
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          w="100%"
        >
          <HomestayLogo />
          <HeaderTabs />
          <HStack space="lg" alignItems="center" pr="$1.5">
            <ToggleMode />
            <UserProfile />
          </HStack>
        </HStack>
      </Box>
      {/* small screen */}
      <Box
        p="$5"
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        w="100%"
      >
        <Input variant="rounded" size="sm" w="100%">
          <Input.Input placeholder="Anywhere • Any week • Add guests" />
          <Input.Icon
            bg="$primary500"
            borderRadius="$full"
            h="$6"
            w="$6"
            m="$1.5"
          >
            <Icon as={SearchIcon} color="white" size="sm" />
          </Input.Icon>
        </Input>
      </Box>
    </Box>
  );
});
export default Header;
