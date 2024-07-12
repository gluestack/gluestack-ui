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
} from '../../../core-components/nativewind';
import { Heading } from '../../../core-components/nativewind/heading';
import { OverlayProvider } from '@gluestack-ui/overlay';

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <OverlayProvider>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog size="lg" isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Delete post?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-2 mb-4">
            <Text size="sm">
              Deleting the post will remove it permanently and cannot be undone.
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
    </OverlayProvider>
  );
};

export default AlertDialogDemo;
