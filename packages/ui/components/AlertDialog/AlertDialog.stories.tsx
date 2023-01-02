import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
// import { AlertDialogComponent } from './AlertDialog';
import { AlertDialog, CloseIcon, Button, Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';
import { useArgs } from '@storybook/client-api';

var st = document.createElement('style');
st.innerHTML = `#story--alertdialog--basic{ height: 350px }`;
document.body.append(st);

const AlertDialogMeta: ComponentMeta<typeof AlertDialog> = {
  title: 'OVERLAY/AlertDialog',
  component: AlertDialog,
  argTypes: {
    showAlertDialog: {
      control: 'boolean',
    },
  },
  args: {
    showAlertDialog: true,
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default AlertDialogMeta;

type AlertDialogStory = ComponentStory<typeof AlertDialog>;

export const Basic: AlertDialogStory = ({ ...props }) => {
  const [{ showAlertDialog }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ showAlertDialog: !showAlertDialog });
  return (
    <Wrapper>
      <Button onPress={handleClose}>
        <Button.Text>Click me</Button.Text>
      </Button>

      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} {...props}>
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
            <Button variant="solid" onPress={handleClose}>
              <Button.Text>Cancel</Button.Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Wrapper>
  );
};
