import React, { useState } from 'react';
import {
  Text,
  Button,
  Popover,
  CloseIcon,
  Icon,
  Box,
  Center,
  Heading,
  Pressable,
  HStack,
  VStack,
  Avatar,
  CircleIcon,
  AddIcon,
} from '../../../ui-components';

import { PhoneIcon, Clock3Icon, MailIcon } from 'lucide-react-native';

const PopoverStory = ({
  // showPopover: showPopoverProp = true,
  placement = 'bottom',
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Center w={1200} h={800}>
      <Popover
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        // {...props}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>Popover</Button.Text>
            </Button>
          );
        }}
      >
        <Popover.Backdrop />
        <Popover.Content>
          <Popover.Header>
            <Heading size="lg">Welcome!</Heading>
            <Popover.CloseButton>
              <Icon as={CloseIcon} />
            </Popover.CloseButton>
          </Popover.Header>
          <Popover.Body>
            <Text size="sm">
              Join the product tour and start creating your own checklist. Are
              you ready to jump in?
            </Text>
          </Popover.Body>
          <Popover.Footer>
            <Text size="xs" flex={1}>
              Step 2 of 3
            </Text>
            <Button.Group space="md">
              <Button
                variant="outline"
                action="secondary"
                onPress={handleClose}
              >
                <Button.Text>Back</Button.Text>
              </Button>
              <Button onPress={handleClose}>
                <Button.Text>Next</Button.Text>
              </Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Center>
  );
};

export default PopoverStory;

export {
  Text,
  Popover,
  Button,
  CloseIcon,
  Box,
  Heading,
  Icon,
  Pressable,
  HStack,
  VStack,
  Avatar,
  CircleIcon,
  AddIcon,
  Center,
  PhoneIcon,
  Clock3Icon,
  MailIcon,
  useState,
};
