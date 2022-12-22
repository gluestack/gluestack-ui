import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
// import { AlertDialogComponent } from './AlertDialog';
import { AlertDialog, CloseIcon, Button, Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const AlertDialogMeta: ComponentMeta<typeof AlertDialog> = {
  title: 'AlertDialog',
  component: AlertDialog,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    showAlertDialog: {
      control: 'boolean',
    },
    defaultIsOpen: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
  },
  args: {
    text: 'Press me',
    variant: 'solid',
    size: 'md',
    showAlertDialog: false,
    defaultIsOpen: true,
    leftIcon: false,
    rightIcon: false,
  },
};

export default AlertDialogMeta;

type AlertDialogStory = ComponentStory<typeof AlertDialog>;

export const Basic: AlertDialogStory = ({
  showAlertDialog,
  defaultIsOpen,
  ...props
}) => {
  return (
    <Wrapper>
      <Button onPress={() => {}}>
        <Button.Text>Click me</Button.Text>
      </Button>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {}}
        defaultIsOpen={defaultIsOpen}
      >
        <AlertDialog.Backdrop />
        <AlertDialog.Content>
          <AlertDialog.CloseButton>
            <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
          </AlertDialog.CloseButton>
          <AlertDialog.Header>
            <Text variant="AlertDialogHeader">Return Policy</Text>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
              Create a 'Return Request' under “My Orders” section of
              App/Website. Follow the screens that come up after tapping on the
              'Return’ button. Please make a note of the Return ID that we
              generate at the end of the process. Keep the item ready for pick
              up or ship it to us basis on the return mode.
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button variant="solid" onPress={() => {}}>
              <Button.Text>Cancel</Button.Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Wrapper>
  );
};
