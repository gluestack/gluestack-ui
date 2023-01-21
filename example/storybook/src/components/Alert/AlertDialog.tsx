import {
  Root,
  Backdrop,
  CloseButton,
  Body,
  Content,
  Footer,
  Header,
} from './styled-component';
import { createAlertDialog } from '@universa11y/alert-dialog';
import React from 'react';
import { useState } from 'react';

const AlertDialogTemp = createAlertDialog({
  Root,
  Backdrop,
  CloseButton,
  Body,
  Content,
  Footer,
  Header,
});

export const AlertDialog = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(true);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <>
      <AlertDialogTemp isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogTemp.Backdrop />
        <AlertDialogTemp.Content>
          <AlertDialogTemp.CloseButton>
            <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
          </AlertDialogTemp.CloseButton>
          <AlertDialogTemp.Header>
            {/* @ts-ignore */}
            <Text variant="AlertDialogTempHeader">Return Policy</Text>
          </AlertDialogTemp.Header>
          <AlertDialogTemp.Body>
            <Text>
              Create a 'Return Request' under “My Orders” section of
              App/Website. Follow the screens that come up after tapping on the
              'Return’ button. Please make a note of the Return ID that we
              generate at the end of the process. Keep the item ready for pick
              up or ship it to us basis on the return mode.
            </Text>
          </AlertDialogTemp.Body>
          <AlertDialogTemp.Footer>
            <Button variant="solid" onPress={handleClose}>
              <Button.Text>Cancel</Button.Text>
            </Button>
          </AlertDialogTemp.Footer>
        </AlertDialogTemp.Content>
      </AlertDialogTemp>
    </>
  );
};
