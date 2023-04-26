import React from 'react';
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
          offset={30}
          placement={placement}
          trigger={(triggerProps: any) => {
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
              <Heading>Delete Customer</Heading>
              <Popover.CloseButton>
                <Icon as={CloseIcon} />
              </Popover.CloseButton>
            </Popover.Header>

            <Popover.Body>
              <Text>
                This will remove all data relating to Alex. This action cannot
                be reversed. Deleted data can not be recovered.
              </Text>
            </Popover.Body>

            <Popover.Footer>
              <Button
                variant="outline"
                action="secondary"
                mr={'$3'}
                onPress={handleClose}
              >
                <Button.Text>Cancel</Button.Text>
              </Button>
              <Button onPress={handleClose}>
                <Button.Text>Delete</Button.Text>
              </Button>
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
  PhoneIcon,
  Clock3Icon,
  MailIcon,
};
