import React from 'react';
import {
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  VStack,
  Icon,
} from '@gluestack-ui/themed';

import {
  Alert,
  AlertIcon,
  AlertText,
} from '../../components-example/themed/Alert';

const AlertBasic = ({ ...props }: any) => {
  return (
    <Alert {...props} gap="$3">
      <AlertIcon as={InfoIcon} />
      <AlertText>Selection successfully moved!</AlertText>
    </Alert>
  );
};

AlertBasic.description =
  'This is a basic Alert component example. Alerts are used to communicate a state that affects a system, feature or page';

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
