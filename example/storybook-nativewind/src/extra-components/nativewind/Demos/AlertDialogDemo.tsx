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
} from '../../../core-components/nativewind';
import { Heading } from '../../../core-components/nativewind/heading';
import { X } from 'lucide-react-native';
import { OverlayProvider } from '@gluestack-ui/overlay';

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <OverlayProvider>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog size="full" isOpen={showAlertDialog} onClose={handleClose}>
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
            <Text>Whoa, slow down there!</Text>
          </AlertDialogBody>
          <AlertDialogFooter className="gap-3">
            <Button
              size="sm"
              variant="outline"
              action="secondary"
              onPress={handleClose}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" action="negative" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </OverlayProvider>
  );
};

export default AlertDialogDemo;
