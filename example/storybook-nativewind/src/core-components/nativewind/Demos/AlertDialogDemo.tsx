import React, { useState } from 'react';
import {
  Button,
  ButtonText,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  Text,
  AlertDialogFooter,
  AlertDialogCloseButton,
} from '../';
import { Heading } from '..//heading';
import { X } from 'lucide-react-native';

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading>Return Policy</Heading>
            <AlertDialogCloseButton>
              <X
                size={20}
                className="stroke-background-400 group-[:hover]/alert-dialog-close-button:stroke-background-700 group-[:active]/alert-dialog-close-button:stroke-background-900 group-[:focus-visible]/alert-dialog-close-button:stroke-background-900"
              />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>
              Whoa, slow down there! This modal is like a red light at an
              intersection, reminding you to stop and think before you proceed.
              Is deleting this folder the right choice?
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="gap-3">
            <Button variant="outline" action="secondary" onPress={handleClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button action="negative" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertDialogDemo;
