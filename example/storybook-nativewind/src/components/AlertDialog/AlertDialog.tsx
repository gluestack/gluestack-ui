import React, { useState } from 'react';

import {
  CloseIcon,
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
} from '@gluestack-ui/themed';

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
} from '@/components/AlertDialog';
import { AlertTriangleIcon } from 'lucide-react-native';

const AlertDialogBasic = ({
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
        <AlertDialogFooter gap="$3">
          <Button variant="outline" action="secondary" onPress={handleClose}>
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

const FigmaAlertDialogStory = ({
  showAlertDialog: _showAlertDialogProp = true,
  _colorMode,
  ...props
}) => {
  return (
    <AlertDialog
      isOpen={true}
      py="$16"
      w={1230}
      bg="#00000080"
      sx={{
        _dark: {
          bg: '#ffffff80',
        },
      }}
      _experimentalOverlay={true}
      {...props}
    >
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
        <AlertDialogFooter gap="$3">
          <Button variant="outline" action="secondary">
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button action="negative">
            <ButtonText>Delete</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

AlertDialogBasic.description =
  'This is a basic AlertDialog component example. Alerts are used to communicate a state that affects a system, feature or page';

export default AlertDialogBasic;

export {
  FigmaAlertDialogStory,
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
