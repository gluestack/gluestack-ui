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
          <Heading
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Heading',
                'size': 'lg',
              }),
            }}
          >
            Return Policy
          </Heading>
          <AlertDialogCloseButton>
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
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
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
            <ButtonText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Cancel
            </ButtonText>
          </Button>
          <Button action="negative" onPress={handleClose}>
            <ButtonText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Delete
            </ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const FigmaAlertDialogStory = ({
  showAlertDialog: _showAlertDialogProp = true,
  ...props
}) => {
  return (
    <AlertDialog isOpen={true} my="$16" _experimentalOverlay={false} {...props}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Heading',
                'size': 'lg',
              }),
            }}
          >
            Return Policy
          </Heading>
          <AlertDialogCloseButton>
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
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Whoa, slow down there! This modal is like a red light at an
            intersection, reminding you to stop and think before you proceed. Is
            deleting this folder the right choice?
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter>
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
            <ButtonText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Cancel
            </ButtonText>
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
            <ButtonText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Delete
            </ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FigmaAlertDialogStory;

export {
  AlertDialogStory,
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
