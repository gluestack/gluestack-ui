import { ComponentPreviewer } from '@/components/custom/component-previewer';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from '@/components/ui/menu';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import {
  Icon,
  AddIcon,
  GlobeIcon,
  PlayIcon,
  SettingsIcon,
  MenuIcon,
  HelpCircleIcon,
  MessageCircleIcon,
} from '@/components/ui/icon';
import { Badge, BadgeText } from '@/components/ui/badge';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer
        props={{
          placement: {
            control: {
              type: 'select',
            },
            options: [
              'top',
              'bottom',
              'left',
              'right',
              'top start',
              'top end',
              'bottom start',
              'bottom end',
              'left start',
              'left end',
              'right start',
              'right end',
            ],
            defaultValue: 'top',
          },
        }}
        title={undefined}
      >
        {(props) => {
          return (
            <Menu
              placement={props.placement}
              offset={5}
              disabledKeys={['Settings']}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps}>
                    <ButtonText>Menu</ButtonText>
                  </Button>
                );
              }}
            >
              <MenuItem key="Add account" textValue="Add account">
                <Icon as={AddIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">Add account</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Community" textValue="Community">
                <Icon as={GlobeIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">Community</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Plugins" textValue="Plugins">
                <Icon as={PlayIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">Plugins</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Settings" textValue="Settings">
                <Icon as={SettingsIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">Settings</MenuItemLabel>
              </MenuItem>
            </Menu>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Menu with Tag'}>
        {(props) => {
          return (
            <Menu
              offset={5}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps} size="sm">
                    <ButtonIcon as={MenuIcon} />
                  </Button>
                );
              }}
            >
              <MenuItem
                key="Membership"
                textValue="Membership"
                className="p-2 justify-between"
              >
                <MenuItemLabel size="sm">Membership</MenuItemLabel>
                <Badge action="success" className="rounded-full">
                  <BadgeText className="text-2xs capitalize">Pro</BadgeText>
                </Badge>
              </MenuItem>
              <MenuItem key="Orders" textValue="Orders" className="p-2">
                <MenuItemLabel size="sm">Orders</MenuItemLabel>
              </MenuItem>
              <MenuItem
                key="Address Book"
                textValue="Address Book"
                className="p-2"
              >
                <MenuItemLabel size="sm">Address Book</MenuItemLabel>
              </MenuItem>
              <MenuSeparator />
              <MenuItem
                key="Earn & Redeem"
                textValue="Earn & Redeem"
                className="p-2"
              >
                <MenuItemLabel size="sm">Earn & Redeem</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Coupons" textValue="Coupons" className="p-2">
                <MenuItemLabel size="sm">Coupons</MenuItemLabel>
              </MenuItem>
              <MenuItem
                key="Help Center"
                textValue="Help Center"
                className="p-2"
              >
                <MenuItemLabel size="sm">Help Center</MenuItemLabel>
              </MenuItem>
              <MenuSeparator />
              <MenuItem key="Logout" textValue="Logout" className="p-2">
                <MenuItemLabel size="sm">Logout</MenuItemLabel>
              </MenuItem>
            </Menu>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Menu with Selection'}>
        {(props) => {
          const [selected, setSelected] = React.useState(new Set([]));
          return (
            <Menu
              placement="bottom left"
              selectionMode="single"
              selectedKeys={selected}
              offset={5}
              className="p-1.5"
              onSelectionChange={(keys) => {
                setSelected(keys);
              }}
              closeOnSelect={true}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps}>
                    <ButtonText>Menu</ButtonText>
                  </Button>
                );
              }}
            >
              <MenuItem
                key="Account Settings"
                textValue="Account Settings"
                className="p-2 web:min-w-[294px] min-w-[225px]"
              >
                <Icon as={SettingsIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">Account Settings</MenuItemLabel>
              </MenuItem>
              <MenuItem
                key="Help Centre"
                textValue="Help Centre"
                className="p-2"
              >
                <Icon as={HelpCircleIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">Help Centre</MenuItemLabel>
              </MenuItem>
              <MenuItem
                key="Contact Support"
                textValue="Contact Support"
                className="p-2"
              >
                <Icon as={MessageCircleIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">Contact Support</MenuItemLabel>
              </MenuItem>
              <MenuSeparator />
              <MenuItem
                key="Download Mobile App"
                textValue="Download Mobile App"
                className="p-2"
              >
                <MenuItemLabel size="sm">Download Mobile App</MenuItemLabel>
              </MenuItem>
              <MenuItem
                key="Install Chrome Extension"
                textValue="Install Chrome Extension"
                className="p-2"
              >
                <MenuItemLabel size="sm">
                  Install Chrome Extension
                </MenuItemLabel>
              </MenuItem>
            </Menu>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
