import React from 'react';
import {
  Box,
  Badge,
  Avatar,
  Pressable,
  Center,
  Button,
  Divider,
  Text,
} from '@gluestack/design-system';
import Wrapper from '../Wrapper';
import {
  GlobeIcon,
  PluginIcon,
  ThemeIcon,
  SettingsIcon,
  PlusIcon,
  HamburgerIcon,
} from '../../components/Icons/Icons';
import { createMenu } from '@universa11y/menu';
import {
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
} from '../styled-components/menu';

export const Menu = createMenu({
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
}) as any;

export const ComplexMenuGroup = ({ placement }: any) => {
  return (
    <Wrapper>
      <Menu
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
        <Menu.Content bgColor={'$backgroundLight0'}>
          <Menu.Group>
            <Menu.GroupTitle py={'$3'}>
              <Text
                fontSize={'$xs'}
                p="$3"
                lineHeight={18}
                color="$textLight500"
                fontWeight="$medium"
              >
                Explore
              </Text>
            </Menu.GroupTitle>
            <Menu.Item>
              <GlobeIcon />
              <Text sx={{ px: '$3' }}>Community</Text>
            </Menu.Item>
            <Menu.Item justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                <PluginIcon />
                <Text sx={{ px: '$3' }}>Plugins</Text>
              </Box>
              <Text>⌘⇧B︎</Text>
            </Menu.Item>
            <Menu.Item justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                <ThemeIcon />
                <Text sx={{ px: '$3' }}>Theme</Text>
              </Box>
              <Badge bgColor={'$info600'} px={'$1'} py={'$px'}>
                <Text
                  color="$textLight50"
                  lineHeight={18}
                  fontSize={'$xs'}
                  fontWeight={'$medium'}
                >
                  New
                </Text>
              </Badge>
            </Menu.Item>
          </Menu.Group>
          {/* @ts-ignore */}
          <Divider sx={{ mt: '$3' }} />
          <Menu.Group>
            <Menu.GroupTitle py={'$3'}>
              <Text
                fontSize={'$xs'}
                p="$3"
                lineHeight={18}
                color="$textLight500"
                fontWeight="$medium"
              >
                Account
              </Text>
            </Menu.GroupTitle>
            <Menu.Item>
              <SettingsIcon />
              <Text sx={{ px: '$3' }}>Settings</Text>
            </Menu.Item>
            <Menu.Item>
              <PlusIcon />
              <Text sx={{ px: '$3' }}>Add Account</Text>
            </Menu.Item>
          </Menu.Group>
          {/* @ts-ignore */}
          <Divider sx={{ mt: '$3' }} />
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
