import React from 'react';

import Wrapper from '../Wrapper';
import {
  GlobeIcon,
  PluginIcon,
  ThemeIcon,
  SettingsIcon,
  PlusIcon,
  HamburgerIcon,
  Center,
  Button,
  Text,
  Box,
  Badge,
  Pressable,
  Avatar,
  Divider,
  Menu,
} from '../../ui-components';

export const ComplexMenuGroup = ({ placement }: any) => {
  return (
    <Wrapper>
      <Menu
        isOpen
        placement={placement}
        trigger={(triggerProps: any) => {
          return (
            <Center>
              <Button {...triggerProps}>
                <HamburgerIcon color={'$textLight50'} />
              </Button>
            </Center>
          );
        }}
      >
        <Menu.Backdrop />
        <Menu.Content>
          <Menu.Group>
            <Menu.GroupTitle py={'$3'}>Explore</Menu.GroupTitle>
            <Menu.Item sx={{}}>
              <GlobeIcon
                // color="$red900"
                sx={{
                  _dark: {
                    color: '$backgroundDark400',
                  },
                  color: '$red900',
                }}
              />
              <Text sx={{ px: '$3', color: '$red700' }}>Community</Text>
            </Menu.Item>
            <Menu.Item justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                <PluginIcon
                  color="$backgroundLight500"
                  sx={{
                    _dark: {
                      color: '$backgroundDark400',
                    },
                  }}
                />
                <Text sx={{ px: '$3' }}>Plugins</Text>
              </Box>
              <Text>⌘⇧B︎</Text>
            </Menu.Item>
            <Menu.Item justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                <ThemeIcon
                  color="$backgroundLight500"
                  sx={{
                    _dark: {
                      color: '$backgroundDark400',
                    },
                  }}
                />
                <Text sx={{ px: '$3' }}>Theme</Text>
              </Box>
              <Badge size="sm" variant="solid" action="success">
                <Badge.Text>NEW</Badge.Text>
              </Badge>
            </Menu.Item>
          </Menu.Group>

          <Divider
            color={'$borderLight400'}
            sx={{
              mt: '$3',
              _dark: {
                color: '$borderDark800',
              },
            }}
          />
          <Menu.Group>
            <Menu.GroupTitle py={'$3'}>Account</Menu.GroupTitle>
            <Menu.Item>
              <SettingsIcon
                color="$backgroundLight500"
                sx={{
                  _dark: {
                    color: '$backgroundDark400',
                  },
                }}
              />
              <Text sx={{ px: '$3' }}>Settings</Text>
            </Menu.Item>
            <Menu.Item>
              <PlusIcon
                color="$backgroundLight500"
                sx={{
                  _dark: {
                    color: '$backgroundDark400',
                  },
                }}
              />
              <Text sx={{ px: '$3' }}>Add Account</Text>
            </Menu.Item>
          </Menu.Group>
          {/* @ts-ignore */}
          <Divider
            color={'$borderLight400'}
            sx={{
              mt: '$3',
              _dark: {
                color: '$borderDark800',
              },
            }}
          />
          <Menu.Group>
            <Menu.Item justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                <Avatar size={'xs'}>
                  <Text fontSize={10} lineHeight={15} color="$textLight50">
                    SS
                  </Text>
                </Avatar>
                <Text sx={{ px: '$2' }}>James</Text>
              </Box>
              <Pressable
                py={'$1'}
                px={'$2'}
                bg={'$primary600'}
                borderRadius={'$sm'}
              >
                <Text
                  fontSize={'$xs'}
                  lineHeight={18}
                  color="$textLight50"
                  fontWeight="$medium"
                >
                  Log out
                </Text>
              </Pressable>
            </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu>
    </Wrapper>
  );
};
