import React, { useState } from 'react';

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
            intersection, reminding you to stop and think before you proceed. Is
            deleting this folder the right choice?
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
  );
};

const FigmaAlertDialogStory = ({
  showAlertDialog: _showAlertDialogProp = true,
  ...props
}) => {
  return (
    <AlertDialog isOpen={true} my="$16" _experimentalOverlay={false} {...props}>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <Heading>Return Policy</Heading>
          <AlertDialog.CloseButton>
            <Icon
              as={CloseIcon}
              dataSet={{
                'component-props': JSON.stringify({
                  'instance': true,
                  'instance-name': 'Icon',
                  'name': 'CloseIcon',
                  'size': 'md',
                }),
              }}
            />
          </AlertDialog.CloseButton>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Text>
            Whoa, slow down there! This modal is like a red light at an
            intersection, reminding you to stop and think before you proceed. Is
            deleting this folder the right choice?
          </Text>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button
            variant="outline"
            action="secondary"
            mr="$3"
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Button-outline',
                'size': 'md',
                'action': 'secondary',
                'state': 'default',
              }),
            }}
          >
            <Button.Text>Cancel</Button.Text>
          </Button>
          <Button
            action="negative"
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Button-solid',
                'size': 'md',
                'action': 'negative',
                'state': 'default',
              }),
            }}
          >
            <Button.Text>Delete</Button.Text>
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default FigmaAlertDialogStory;

export {
  AlertDialogStory,
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
