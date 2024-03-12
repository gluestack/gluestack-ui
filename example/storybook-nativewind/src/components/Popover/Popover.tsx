import React, { useState } from 'react';
import {
  Text,
  Button,
  ButtonText,
  ButtonGroup,
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
  PopoverArrow,
} from '../../core-components/themed';
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
} from '@/components/ui/popover';

import { PhoneIcon, Clock3Icon, MailIcon } from 'lucide-react-native';
function PopoverBasic(props: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      {...props}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverHeader>
          <Heading size="lg">Welcome!</Heading>
          <PopoverCloseButton>
            <Icon as={CloseIcon} />
          </PopoverCloseButton>
        </PopoverHeader>
        <PopoverBody>
          <Text size="sm">
            Join the product tour and start creating your own checklist. Are you
            ready to jump in?
          </Text>
        </PopoverBody>
        <PopoverFooter>
          <Text size="xs" flex={1}>
            Step 2 of 3
          </Text>
          <ButtonGroup space="md">
            <Button variant="outline" action="secondary" onPress={handleClose}>
              <ButtonText>Back</ButtonText>
            </Button>
            <Button onPress={handleClose}>
              <ButtonText>Next</ButtonText>
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

const FigmaPopoverStory = ({
  showPopover: _showPopoverProp = true,
  _placement = 'bottom',
  ...props
}: any) => {
  return (
    <Box w="$full" h="$full">
      <Popover
        {...props}
        _experimentalOverlay={true}
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
    </Box>
  );
};

PopoverBasic.description = `Popover is a non-modal dialog that floats around a trigger element. It is used to display contextual information or UI. It is triggered by clicking, tapping, or hovering on an element.`;

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
  PopoverArrow,
};
