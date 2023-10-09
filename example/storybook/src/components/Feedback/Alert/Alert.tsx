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
      <AlertIcon
        as={InfoIcon}
        mr="$3"
        dataSet={{
          'component-props': JSON.stringify({
            'instance': true,
            'instance-name': 'Icon',
            'name': 'InfoIcon',
            'size': 'md',
          }),
        }}
      />
      <AlertText
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        Selection successfully moved!
      </AlertText>
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
