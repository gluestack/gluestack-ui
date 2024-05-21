import React, { useState } from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { X } from 'lucide-react-native';

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
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} {...props}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading>Return Policy</Heading>
            <AlertDialogCloseButton>
              <Icon as={X} size="lg" />
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
