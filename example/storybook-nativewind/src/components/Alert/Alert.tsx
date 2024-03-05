import React from 'react';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import {
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  Icon,
} from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';

const AlertBasic = ({ ...props }: any) => {
  return (
    <Alert {...props} className="gap-3">
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
  Center,
  HStack,
};
