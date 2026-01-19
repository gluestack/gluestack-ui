'use client';
import React from 'react';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Fab, FabIcon } from '@/components/ui/fab';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import {
  Popover,
  PopoverBackdrop,
  PopoverBody,
  PopoverContent,
  PopoverArrow,
} from '@/components/ui/popover';
import { Heading } from '@/components/ui/heading';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Icon,
  InfoIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  AddIcon,
  GlobeIcon,
} from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Alert, AlertText, AlertIcon } from '@/components/ui/alert';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { Spinner } from '@/components/ui/spinner';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';

import {
  Bell,
  Download,
  MessageCircle,
  Paperclip,
  Settings,
  SettingsIcon,
  SquarePen,
  Trash,
} from 'lucide-react-native';
import colors from 'tailwindcss/colors';

const NavigationContent = ({ show }: { show: boolean }) => {
  const [activeButton, setActiveButton] = React.useState('Weekly');
  const [underlineButton, setUnderlineButton] = React.useState('Attachments');
  const [selectedButton, setSelectedButton] = React.useState('Messages');

  const handleClick = (buttonName: React.SetStateAction<string>) => {
    setActiveButton(buttonName);
  };
  const handleUnderlineButton = (buttonName: React.SetStateAction<string>) => {
    setUnderlineButton(buttonName);
  };
  const handleSelectedButton = (buttonName: React.SetStateAction<string>) => {
    setSelectedButton(buttonName);
  };
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Box
      className={`gap-6 w-full lg:flex-row flex-col ${show ? '' : 'hidden'}`}
    >
      <VStack className="gap-6 lg:w-[40%]">
        <HStack className="bg-muted rounded-lg p-1 lg:flex hidden gap-1.5 items-center">
          {['Daily', 'Weekly', 'Monthly'].map((buttonName) => (
            <Pressable
              key={buttonName}
              onPress={() => handleClick(buttonName)}
              className={` flex-1 gap-1.5 cursor-pointer ${
                activeButton === buttonName ? 'bg-background' : ''
              } rounded-lg px-3.5 py-2 items-center`}
            >
              <Text
                className={`text-sm ${
                  activeButton === buttonName
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground font-normal'
                } `}
              >
                {buttonName}
              </Text>
            </Pressable>
          ))}
        </HStack>
        <VStack className="gap-3">
          <HStack className="gap-[13px]">
            {/* <Center> */}
            <Button
              onPress={() => setShowAlertDialog(true)}
              className="flex-1"
              size="md"
            >
              <ButtonText className="text-center text-sm">
                Open Alert Dialog
              </ButtonText>
            </Button>
            <AlertDialog
              isOpen={showAlertDialog}
              onClose={() => setShowAlertDialog(false)}
            >
              <AlertDialogBackdrop />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <Heading
                    className="text-foreground font-semibold"
                    size="md"
                  >
                    Are you sure you want to delete this post?
                  </Heading>
                </AlertDialogHeader>
                <AlertDialogBody className="mt-3 mb-4">
                  <Text size="sm">
                    Deleting the post will remove it permanently and cannot be
                    undone. Please confirm if you want to proceed.
                  </Text>
                </AlertDialogBody>
                <AlertDialogFooter className="">
                  <Button
                    variant="outline"
                    action="secondary"
                    onPress={() => setShowAlertDialog(false)}
                    size="sm"
                  >
                    <ButtonText>Cancel</ButtonText>
                  </Button>
                  <Button size="sm" onPress={() => setShowAlertDialog(false)}>
                    <ButtonText>Delete</ButtonText>
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {/* </Center> */}

            <Popover
              isOpen={isOpen}
              onClose={handleClose}
              onOpen={handleOpen}
              trigger={(triggerProps: any) => {
                return (
                  <Button {...triggerProps}>
                    <ButtonText>Open Popover</ButtonText>
                  </Button>
                );
              }}
            >
              <PopoverBackdrop />
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <Text className="text-foreground">
                    Alex, Annie and many others are already enjoying the Pro
                    features, don&apos;t miss out on the fun!
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          <HStack className="gap-[13px] md:flex hidden">
            <Tooltip
              placement="top"
              trigger={(triggerProps: any) => {
                return (
                  <Button
                    {...triggerProps}
                    className="flex-1"
                    variant="outline"
                    action="secondary"
                    size="sm"
                  >
                    <ButtonText className="text-center text-sm">
                      Reveal on Hover
                    </ButtonText>
                  </Button>
                );
              }}
            >
              <TooltipContent>
                <TooltipText>Tooltip</TooltipText>
              </TooltipContent>
            </Tooltip>

            <Menu
              offset={5}
              disabledKeys={['Settings']}
              trigger={({ ...triggerProps }: any) => {
                return (
                  <Button {...triggerProps} size="sm">
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
          </HStack>
        </VStack>

        <VStack
          space="2xl"
          className="border border-dashed border-border rounded-lg  py-[21px] px-[18px] gap-3"
        >
          <HStack space="md">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>Kevin James</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
            </Avatar>
            <VStack>
              <Heading size="sm">Kevin James</Heading>
              <Text size="sm">Hi Rachel, What’s up?</Text>
            </VStack>
          </HStack>
          <HStack space="md">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>Jacob Jones</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
              />
            </Avatar>
            <VStack>
              <Heading size="sm">Jacob Jones</Heading>
              <Text size="sm">Good Morning!</Text>
            </VStack>
          </HStack>
          <HStack space="md">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>Albert Flores</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}
              />
            </Avatar>
            <VStack>
              <Heading size="sm">Albert Flores</Heading>
              <Text size="sm">Coffee?</Text>
            </VStack>
          </HStack>

          <Fab
            className="h-12 w-12"
            placement="bottom right"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
          >
            <FabIcon
              className="h-[16px] w-[16px] stroke-typography-0"
              as={SquarePen}
            />
          </Fab>
        </VStack>
      </VStack>
      <VStack className="lg:w-[60%]">
        <Box className="border border-dashed border-border rounded-lg gap-5 p-6 md:flex hidden">
          <HStack className="gap-3">
            {[
              { name: 'Attachments', icon: Paperclip },
              { name: 'Downloads', icon: Download },
              { name: 'Trash', icon: Trash },
            ].map((button) => (
              <Pressable
                key={button.name}
                className="flex-1"
                onPress={() => handleUnderlineButton(button.name)}
              >
                <HStack
                  className={`gap-1.5 self-center pb-3 items-center border-primary-700 ${
                    underlineButton === button.name ? 'border-b-2' : 'border-0'
                  }`}
                >
                  <Icon
                    className="w-3 h-3 text-background-800"
                    as={button.icon}
                  />
                  <Text className="text-sm">{button.name}</Text>
                </HStack>
              </Pressable>
            ))}
          </HStack>

          <HStack className="gap-3 justify-center">
            {[
              { name: 'Notification', icon: Bell },
              { name: 'Messages', icon: MessageCircle },
              { name: 'Settings', icon: Settings },
            ].map((button) => (
              <Pressable
                key={button.name}
                onPress={() => handleSelectedButton(button.name)}
                className="flex-1"
              >
                <HStack
                  className={`cursor-pointer ${
                    selectedButton === button.name ? 'bg-muted' : ''
                  } rounded-full px-6 py-3 gap-1.5 self-center items-center`}
                >
                  <Icon
                    className="w-3 h-3 text-background-800"
                    as={button.icon}
                  />
                  <Text className="text-sm">{button.name}</Text>
                </HStack>
              </Pressable>
            ))}
          </HStack>
        </Box>
        <Box className="justify-between items-center mt-[25px] md:flex hidden flex-row">
          <Button variant="outline" className="px-3 gap-1 h-8 border-0">
            <ButtonIcon className="h-4 w-4" as={ChevronLeftIcon} />
            <ButtonText className="text-xs font-bold text-foreground">
              Prev
            </ButtonText>
          </Button>
          <HStack className="gap-4">
            <Button className="w-9 h-8">
              <ButtonText className="text-muted-foreground text-xs leading-normal font-bold px-[11px] py-0">
                01
              </ButtonText>
            </Button>
            <Button className="w-9 h-8 border-0" variant="outline">
              <ButtonText className="text-foreground text-xs leading-normal font-bold">
                02
              </ButtonText>
            </Button>
            <Button className="w-9 h-8 border-0" variant="outline">
              <ButtonText className="text-foreground text-xs leading-normal font-bold">
                03
              </ButtonText>
            </Button>
            <Button className="w-9 h-8 border-0" variant="outline">
              <ButtonText className="text-foreground text-xs leading-normal font-bold">
                04
              </ButtonText>
            </Button>
            <Button className="w-9 h-8 border-0" variant="outline">
              <ButtonText className="text-foreground text-xs leading-normal font-bold">
                05
              </ButtonText>
            </Button>
            <Button className="w-9 h-8 border-0 p-0" variant="outline">
              {/* <ButtonIcon className="h-4 w-4" as={EllipsisIcon} /> */}
            </Button>
          </HStack>
          <Button variant="outline" className="px-3 gap-1 h-8 border-0">
            <ButtonText className="text-xs font-bold text-foreground">
              Next
            </ButtonText>
            <ButtonIcon className="h-4 w-4" as={ChevronRightIcon} />
          </Button>
        </Box>
        <HStack className="gap-6 md:mt-[34px] md:flex-row flex-col">
          <VStack className="gap-3 p-6 border border-dashed border-border rounded-lg md:flex-col flex-row">
            <Spinner size="large" color={colors.indigo[600]} />
            <Spinner size="large" color={colors.emerald[600]} />
            <Spinner size="large" color={colors.amber[600]} />
          </VStack>
          <VStack className="gap-5">
            <Alert>
              <AlertIcon as={InfoIcon} />
              <AlertText>Description of alert!</AlertText>
            </Alert>

            <Alert
              className="flex-col items-start gap-1 rounded"
              
            >
              <AlertText className="text-base font-medium leading-[22px] text-foreground">
                Success!
              </AlertText>
              <AlertText className="text-muted-foreground text-sm font-normal leading-5">
                Your changes have been saved successfully.
              </AlertText>
            </Alert>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default NavigationContent;
