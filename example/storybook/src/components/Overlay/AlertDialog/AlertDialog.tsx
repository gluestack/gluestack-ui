import React, { useState } from 'react';

import Wrapper from '../../Wrapper';
import {
  CloseIcon,
  AlertDialog,
  Button,
  Text,
  Center,
  Icon,
  Heading,
  AlertCircleIcon,
  CheckCircleIcon,
  HStack,
} from '../../../ui-components';

import { AlertTriangleIcon } from 'lucide-react-native';

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
          <AlertDialog.Header>
            <Heading>Return Policy</Heading>
            <AlertDialog.CloseButton>
              <Icon as={CloseIcon} />
            </AlertDialog.CloseButton>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
              Whoa, slow down there! This modal is like a red light at an
              intersection, reminding you to stop and think before you proceed.
              Is deleting this folder the right choice?
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              mr="$3"
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button action="negative" onPress={handleClose}>
              <Button.Text>Delete</Button.Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Wrapper>
  );
};

export {
  AlertDialog,
  Button,
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
