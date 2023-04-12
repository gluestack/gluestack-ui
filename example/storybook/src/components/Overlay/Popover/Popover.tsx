import React from 'react';
import {
  Text,
  Button,
  Popover,
  CloseIcon,
  Icon,
  Box,
  Center,
} from '../../../ui-components';

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
              <Text>Delete Customer</Text>
              <Popover.CloseButton>
                <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
              </Popover.CloseButton>
            </Popover.Header>

            <Popover.Body>
              <Text>
                This will remove all data relating to Alex. This action cannot
                be reversed. Deleted data can not be recovered.
              </Text>
            </Popover.Body>

            <Popover.Footer>
              {/* @ts-ignore */}
              <Button variant="outline" mr={'$2'} onPress={handleClose}>
                <Button.Text>Cancel</Button.Text>
              </Button>
              <Button>
                <Button.Text color={'white'} onPress={handleClose}>
                  Delete
                </Button.Text>
              </Button>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Center>
    </Wrapper>
  );
};

export { Text, Popover, Button, CloseIcon, Box };
