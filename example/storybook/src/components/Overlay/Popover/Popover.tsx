import React, { useState } from 'react';
import {
  Text,
  Button,
  ButtonText,
  ButtonGroup,
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  CloseIcon,
  Icon,
  Box,
  Center,
  Heading,
  Pressable,
  HStack,
  VStack,
  Avatar,
  AvatarFallbackText,
  CircleIcon,
  AddIcon,
} from '@gluestack-ui/themed';

import { PhoneIcon, Clock3Icon, MailIcon } from 'lucide-react-native';

const PopoverBasic = ({
  showPopover: showPopoverProp = true,
  placement = 'bottom',
}: any) => {
  return (
    <Center w={1200} h={800}>
      <Popover
        offset={10}
        isOpen={showPopoverProp}
        placement={placement}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Popover</ButtonText>
            </Button>
          );
        }}
      >
        <PopoverBackdrop />
        <PopoverContent maxWidth="$96">
          <PopoverHeader>
            <Heading>Welcome!</Heading>
            <PopoverCloseButton>
              <Icon as={CloseIcon} />
            </PopoverCloseButton>
          </PopoverHeader>
          <PopoverBody>
            <Text>
              Join the product tour and start creating your own checklist. Are
              you ready to jump in?
            </Text>
          </PopoverBody>
          <PopoverFooter>
            <Text size="xs" flex={1}>
              Step 2 of 3
            </Text>
            {/* @ts-ignore */}
            <ButtonGroup space="md">
              <Button variant="outline" action="secondary">
                <ButtonText>Back</ButtonText>
              </Button>
              <Button>
                <ButtonText>Next</ButtonText>
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Center>
  );
};

const FigmaPopoverStory = ({
  showPopover: _showPopoverProp = true,
  _placement = 'bottom',
  ...props
}: any) => {
  return (
    <Center w="$full" h="$full">
      <Popover
        {...props}
        _experimentalOverlay={false}
        offset={30}
        isOpen={true}
        placement="top"
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={(triggerProps) => {
          return (
            <Box w={1200} h={500} pt={300} pb={50} alignItems="center">
              <Button {...triggerProps}>
                <ButtonText>Popover</ButtonText>
              </Button>
            </Box>
          );
        }}
      >
        <PopoverContent>
          <PopoverHeader>
            <Heading>Welcome!</Heading>
            <PopoverCloseButton>
              <Icon
                as={CloseIcon}
                dataSet={{
                  'component-props': JSON.stringify({
                    'instance': true,
                    'instance-name': 'Icon',
                    'name': 'CloseIcon',
                    'size': 'md',
                  }),
                }}
              />
            </PopoverCloseButton>
          </PopoverHeader>
          <PopoverBody>
            <Text>
              Join the product tour and start creating your own checklist. Are
              you ready to jump in?
            </Text>
          </PopoverBody>
          <PopoverFooter>
            <Text size="xs" flex={1}>
              Step 2 of 3
            </Text>
            {/* @ts-ignore */}
            <ButtonGroup space="md">
              <Button
                variant="outline"
                action="secondary"
                dataSet={{
                  'component-props': JSON.stringify({
                    'instance': true,
                    'instance-name': 'Button-outline',
                    'size': 'md',
                    'action': 'secondary',
                    'state': 'default',
                  }),
                }}
              >
                <ButtonText>Back</ButtonText>
              </Button>
              <Button
                dataSet={{
                  'component-props': JSON.stringify({
                    'instance': true,
                    'instance-name': 'Button-solid',
                    'size': 'sm',
                    'action': 'primary',
                    'state': 'default',
                  }),
                }}
              >
                <ButtonText>Next</ButtonText>
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Center>
  );
};

export default PopoverBasic;

export {
  FigmaPopoverStory,
  PopoverBasic,
  Text,
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Button,
  ButtonGroup,
  ButtonText,
  CloseIcon,
  Box,
  Heading,
  Icon,
  Pressable,
  HStack,
  VStack,
  Avatar,
  AvatarFallbackText,
  CircleIcon,
  AddIcon,
  Center,
  PhoneIcon,
  Clock3Icon,
  MailIcon,
  useState,
};
