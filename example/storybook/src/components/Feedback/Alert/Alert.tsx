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

function AlertStory({ ...props }: any) {
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
