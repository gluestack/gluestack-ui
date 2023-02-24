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
            Unlock the power of knowledge with the following information. Get
            ready to unleash your inner superhero and change the world!
          </Alert.Text>
        </Alert>
        <Alert action="success">
          <Alert.Icon>
            <CheckCircleIcon />
          </Alert.Icon>
          <Alert.Text>
            Boom! You did it! Please take a moment to pat yourself on the back.
            You've earned it!
          </Alert.Text>
        </Alert>
        <Alert action="error">
          <Alert.Icon>
            <CloseIconFilled />
          </Alert.Icon>
          <Alert.Text>
            Uh-oh! It looks like the matrix has glitched. Our team of tech
            ninjas are already on the case. Please hold tight while we fix the
            issue
          </Alert.Text>
        </Alert>
        <Alert action="warning">
          <Alert.Icon>
            <WarningIcon />
          </Alert.Icon>
          <Alert.Text>
            Warning: Reading the following content may cause spontaneous
            outbursts of 'aha!' moments
          </Alert.Text>
        </Alert>
        <Alert action="muted">
          <Alert.Icon>
            <NotificationIcon />
          </Alert.Icon>
          <Alert.Text>
            Need a helping hand? Your help alert has just been activated, and
            we're here to lend you our expertise, our experience, and our
            enthusiasm. Let's do this!
          </Alert.Text>
        </Alert>
      </VStack>
    </Wrapper>
  );
}

export default AlertVariants;
export { Alert };
