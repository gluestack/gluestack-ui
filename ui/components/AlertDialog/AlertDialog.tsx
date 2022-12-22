import React from 'react';
import { AlertDialog, CloseIcon, Button, Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const AlertDialogComponent = () => {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);

  return (
    <Wrapper>
      <Button onPress={() => setShowAlertDialog(true)}>
        <Button.Text>Click me</Button.Text>
      </Button>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
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
            <Button
              variant="solid"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Wrapper>
  );
};
