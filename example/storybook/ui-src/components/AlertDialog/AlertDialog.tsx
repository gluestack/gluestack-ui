import React, { useState } from 'react';
import { AlertDialog } from '@gluestack/ui-compiled';
// @ts-ignore
import { CloseIcon } from '@gluestack/ui-compiled';
import { Button } from '@gluestack/ui-compiled';
import { Text, Box } from '@gluestack/ui-compiled';

import Wrapper from '../Wrapper';

export const AlertDialogStory = ({ ...props }) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <Wrapper>
      <Button onPress={handleClose}>
        <Button.Text>Click me</Button.Text>
      </Button>

      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} {...props}>
        <AlertDialog.Backdrop />
        <AlertDialog.Content>
          <AlertDialog.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </AlertDialog.CloseButton>
          <AlertDialog.Header>
            {/* @ts-ignore */}
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
            <Button style="solid" onPress={handleClose}>
              <Button.Text>Cancel</Button.Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Wrapper>
  );
};

export { AlertDialog, Button, Text, CloseIcon, Box };
