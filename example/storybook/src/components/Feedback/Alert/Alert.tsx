import React from 'react';

import Wrapper from '../../Wrapper';
import {
  Alert,
  Center,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  WarningIcon,
  VStack,
  Icon,
} from '../../../ui-components';

export function AlertTemp({ ...props }: any) {
  return (
    <Wrapper>
      <Center>
        <Alert {...props}>
          <Alert.Icon as={InfoIcon} mr="$3" />
          <Alert.Text>Selection successfully moved!</Alert.Text>
        </Alert>
      </Center>
    </Wrapper>
  );
}

export default AlertTemp;

export {
  Alert,
  InfoIcon,
  Center,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  WarningIcon,
  Icon,
  VStack,
};
