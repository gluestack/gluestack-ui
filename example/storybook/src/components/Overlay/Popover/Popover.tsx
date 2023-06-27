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

import Wrapper from '../../Wrapper';

export const PopoverStory = ({ placement }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Center w={1200} h={800}>
        <Popover
          isOpen={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          placement={placement}
          trigger={(triggerProps) => {
            return (
              <Button {...triggerProps}>
                <Button.Text>Popover</Button.Text>
              </Button>
            );
          }}
        >
          <Popover.Backdrop />
          <Popover.Content maxWidth="$96">
            <Popover.Header>
              <Heading>Delete Customer</Heading>
              <Popover.CloseButton>
                <Icon as={CloseIcon} size="sm" />
              </Popover.CloseButton>
            </Popover.Header>
            <Popover.Body>
              <Text>
                This will remove all data relating to Alex. This action cannot
                be reversed. Deleted data can not be recovered.
              </Text>
            </Popover.Body>
            <Popover.Footer>
              <Button.Group space="md">
                <Button variant="outline" onPress={handleClose}>
                  <Button.Text>Cancel</Button.Text>
                </Button>
                <Button action="negative" onPress={handleClose}>
                  <Button.Text>Delete</Button.Text>
                </Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Center>
    </Wrapper>
  );
};

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
