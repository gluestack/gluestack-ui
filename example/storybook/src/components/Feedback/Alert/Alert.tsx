import React from 'react';
import {
  Alert,
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
      <Alert.Icon
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
      <Alert.Text>Selection successfully moved!</Alert.Text>
    </Alert>
  );
}

export default AlertStory;

export {
  Alert,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  Icon,
  VStack,
};
