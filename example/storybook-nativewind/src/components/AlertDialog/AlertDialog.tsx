import React, { useState } from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
} from '@/components/ui/alert-dialog';

const AlertDialogBasic = ({ ...props }) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} {...props}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950" size="md">
              Are you sure you want to delete the post
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm">
              Lorem ipsum dolor sit amet consectetur. Nisl amet phasellus dolor
              orci. At arcu sit egestas at faucibus faucibus elementum mauris.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

AlertDialogBasic.description =
  'This is a basic AlertDialog component example. Alerts are used to communicate a state that affects a system, feature or page';

export default AlertDialogBasic;

export {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Button,
  ButtonText,
  Text,
  Heading,
};
