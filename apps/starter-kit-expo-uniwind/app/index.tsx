import React, { useState } from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from '@/components/ui/actionsheet';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from '@/components/ui/accordion';
import { Divider } from '@/components/ui/divider';
import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/icon';
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import {
  Icon,
  AddIcon,
  GlobeIcon,
  PlayIcon,
  SettingsIcon,
} from '@/components/ui/icon';

export default function Home() {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <Box className="flex-1 bg-background">
      <Center className="flex-1 gap-5">
        <VStack className="items-center gap-2">
          <Text className="text-2xl font-bold text-foreground">
            Gluestack UI
          </Text>
          <Text className="text-muted-foreground">powered by UniWind + Tailwind CSS v4</Text>
        </VStack>
        <Button size="default">
          <ButtonText>Get Started</ButtonText>
        </Button>
        <Button onPress={() => setShowActionsheet(true)}>
          <ButtonText>Open Actionsheet</ButtonText>
        </Button>
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
          <ActionsheetBackdrop />
          <ActionsheetContent>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText>Edit Message</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText>Mark Unread</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText>Remind Me</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem isDisabled onPress={handleClose}>
              <ActionsheetItemText>Delete</ActionsheetItemText>
            </ActionsheetItem>
          </ActionsheetContent>
        </Actionsheet>
        {/* Accordion */}
        <Accordion
          type="single"
          isCollapsible={true}
          isDisabled={false}
          className=" w-[90%]"
        >
          <AccordionItem value="a">
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        How do I place an order?
                      </AccordionTitleText>

                      <AccordionIcon as={ChevronDownIcon} />
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                To place an order, simply select the products you want, proceed to
                checkout, provide shipping and payment information, and finalize
                your purchase.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <Divider className="bg-border" />
          <AccordionItem value="b">
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText className='text-red-500'>
                        What payment methods do you accept?
                      </AccordionTitleText>
                      <AccordionIcon as={ChevronDownIcon} />
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                We accept all major credit cards, including Visa, Mastercard, and
                American Express. We also support payments through PayPal.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Avatar group */}
        <VStack space="2xl">
          <HStack space="md">
            <Avatar>
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
            </Avatar>
            <VStack>
              <Heading size="sm">Ronald Richards</Heading>
              <Text size="sm">Nursing Assistant</Text>
            </VStack>
          </HStack>
          <HStack space="md">
            <Avatar>
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
              <AvatarBadge />
            </Avatar>
            <VStack>
              <Heading size="sm">Arlene McCoy</Heading>
              <Text size="sm">Marketing Coordinator</Text>
            </VStack>
          </HStack>
        </VStack>
        <AvatarGroup>
          <Avatar>
            <AvatarFallbackText>John Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />
            <AvatarBadge />
          </Avatar>
          <Avatar>
            <AvatarFallbackText>John Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
            />
            <AvatarBadge />
          </Avatar>
          <Avatar>
            <AvatarFallbackText>John Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />
            <AvatarBadge />
          </Avatar>
          <Avatar>
            <AvatarFallbackText>John Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
            />
            <AvatarBadge />
          </Avatar>
        </AvatarGroup>
        {/* Menu */}
        <Menu
          placement="top"
          offset={5}
          disabledKeys={['Settings']}
          onClose={() => console.log('Menu closed')}
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <ButtonText>Menu</ButtonText>
              </Button>
            );
          }}
        >
          <MenuItem key="Add account" textValue="Add account" onPress={() => console.log('Add account')} closeOnSelect={true}>
            <Icon as={AddIcon} className="mr-2 " />
            <MenuItemLabel >Add account</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Community" textValue="Community" onPress={() => console.log('Community')} closeOnSelect={true}>
            <Icon as={GlobeIcon} className="mr-2 " />
            <MenuItemLabel >Community</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Plugins" textValue="Plugins" onPress={() => console.log('Plugins')} closeOnSelect={true}>
            <Icon as={PlayIcon} className="mr-2 " />
            <MenuItemLabel >Plugins</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Settings" textValue="Settings" onPress={() => console.log('Settings')} closeOnSelect={true}>
            <Icon as={SettingsIcon} className="mr-2 " />
            <MenuItemLabel >Settings</MenuItemLabel>
          </MenuItem>
        </Menu>

      </Center>
    </Box>
  );
}
