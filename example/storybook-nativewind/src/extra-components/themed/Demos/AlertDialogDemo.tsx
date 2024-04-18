import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  ButtonText,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  Text,
  AlertDialogFooter,
  AlertDialogCloseButton,
  CloseIcon,
  Icon,
} from '../../../core-components/themed';
import { Heading } from '../../../core-components/themed/heading';
import { OverlayProvider } from '@gluestack-ui/overlay';

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <OverlayProvider>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="lg">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading>Return Policy</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>Whoa, slow down there!</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="sm">
              <Button
                size="xs"
                variant="outline"
                action="secondary"
                onPress={handleClose}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button size="xs" action="negative" onPress={handleClose}>
                <ButtonText>Delete</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </OverlayProvider>
  );
};

export default AlertDialogDemo;
