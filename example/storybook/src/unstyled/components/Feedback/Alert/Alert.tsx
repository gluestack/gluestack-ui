import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  VStack,
  Icon,
} from '../../../ui-components';

function AlertStory({ ...props }: any) {
  return (
    <Alert {...props}>
      <AlertIcon as={InfoIcon} mr="$3" />
      <AlertText>Selection successfully moved!</AlertText>
    </Alert>
  );
}

export default AlertStory;

export {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  Icon,
  VStack,
};
