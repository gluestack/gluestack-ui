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
} from '@gluestack-ui/themed';

const AlertBasic = ({ ...props }: any) => {
  return (
    <Alert {...props}>
      <AlertIcon as={InfoIcon} mr="$3" />
      <AlertText>Selection successfully moved!</AlertText>
    </Alert>
  );
};

export default AlertBasic;

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
