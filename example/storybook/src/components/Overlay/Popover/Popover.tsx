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
} from '../../../ui-components';

import { PhoneIcon, Clock3Icon, MailIcon } from 'lucide-react-native';

const PopoverStory = ({
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

export default PopoverStory;

export {
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
