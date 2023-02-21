import React from 'react';
import {
  CheckCircleIcon,
  CloseIconFilled,
  InfoIcon,
  NotificationIcon,
  WarningIcon,
} from '../Icons/Icons';
import Wrapper from '../Wrapper';
import { Alert } from './Alert';
import { VStack } from '../VStack/VStack';

export function AlertVariants() {
  return (
    <Wrapper>
      <VStack space="md" w="100%" justifyContent="center" alignItems="center">
        <Alert action="info">
          <Alert.Icon>
            <InfoIcon />
          </Alert.Icon>
          <Alert.Text>
            We can easily extend the button component theme using extendTheme
            function as described in the documentation here.
          </Alert.Text>
        </Alert>
        <Alert action="success">
          <Alert.Icon>
            <CheckCircleIcon />
          </Alert.Icon>
          <Alert.Text>
            We can easily extend the button component theme using extendTheme
            function as described in the documentation here.
          </Alert.Text>
        </Alert>
        <Alert action="error">
          <Alert.Icon>
            <CloseIconFilled />
          </Alert.Icon>
          <Alert.Text>
            We can easily extend the button component theme using extendTheme
            function as described in the documentation here.
          </Alert.Text>
        </Alert>
        <Alert action="warning">
          <Alert.Icon>
            <WarningIcon />
          </Alert.Icon>
          <Alert.Text>
            We can easily extend the button component theme using extendTheme
            function as described in the documentation here.
          </Alert.Text>
        </Alert>
        <Alert action="muted">
          <Alert.Icon>
            <NotificationIcon />
          </Alert.Icon>
          <Alert.Text>
            We can easily extend the button component theme using extendTheme
            function as described in the documentation here.
          </Alert.Text>
        </Alert>
      </VStack>
    </Wrapper>
  );
}

export default AlertVariants;
export { Alert };
export { InfoIcon, Center } from '@gluestack/design-system';
