import React from 'react';
import {
  Alert,
  Center,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  VStack,
  Icon,
} from '../../../ui-components';

export function AlertStory({ ...props }: any) {
  return (
    <Center>
      <Alert {...props}>
        <Alert.Icon as={InfoIcon} mr="$3" />
        <Alert.Text>Selection successfully moved!</Alert.Text>
      </Alert>
    </Center>
  );
}

export default AlertStory;

export {
  Alert,
  InfoIcon,
  Center,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  Icon,
  VStack,
};
