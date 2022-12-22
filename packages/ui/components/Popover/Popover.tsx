import React from 'react';
import { Popover, Center, Button, Text, CloseIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const PopoverComponent = ({ placement, ...props }) => {
  return (
    <Wrapper>
      <Popover
        placement={placement}
        trigger={(triggerProps: any) => {
          return (
            <Center>
              <Button {...triggerProps}>
                <Button.Text>Delete Customer</Button.Text>
              </Button>
            </Center>
          );
        }}
      >
        <Popover.Backdrop />
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton>
            <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
          </Popover.CloseButton>
          <Popover.Header>
            <Text variant="modalHeader">Delete Customer</Text>
          </Popover.Header>
          <Popover.Body>
            <Text>
              This will remove all data relating to Alex. This action cannot be
              reversed. Deleted data can not be recovered.
            </Text>
          </Popover.Body>
          <Popover.Footer>
            <Button variant="outline">
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button variant="solid">
              <Button.Text>Delete</Button.Text>
            </Button>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Wrapper>
  );
};
