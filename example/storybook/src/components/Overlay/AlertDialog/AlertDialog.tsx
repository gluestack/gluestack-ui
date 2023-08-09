import React, { useState } from 'react';

import {
  CloseIcon,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Button,
  ButtonText,
  ButtonGroup,
  Text,
  Center,
  Icon,
  Heading,
  AlertCircleIcon,
  CheckCircleIcon,
  HStack,
} from '../../../ui-components';

import { AlertTriangleIcon } from 'lucide-react-native';

const AlertDialogStory = ({
  showAlertDialog: showAlertDialogProp = true,
  ...props
}) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <AlertDialog
      isOpen={showAlertDialog || showAlertDialogProp}
      onClose={handleClose}
      {...props}
    >
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading>Return Policy</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text>
            Whoa, slow down there! This modal is like a red light at an
            intersection, reminding you to stop and think before you proceed. Is
            deleting this folder the right choice?
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            variant="outline"
            action="secondary"
            onPress={handleClose}
            mr="$3"
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button action="negative" onPress={handleClose}>
            <ButtonText>Delete</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogStory;

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
  ButtonGroup,
  Text,
  CloseIcon,
  Center,
  Heading,
  Icon,
  AlertCircleIcon,
  HStack,
  AlertTriangleIcon,
  CheckCircleIcon,
};
