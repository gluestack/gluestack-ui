import React from 'react';
import { BellIcon, Center } from '@gluestack-ui/themed';

import { Alert, AlertIcon, AlertText } from '@gluestack-ui/themed';
import {
  AlertCircleIcon,
  Info,
  CheckCircle2Icon,
  XCircle,
} from 'lucide-react-native';

function AlertVariants({ variant }: any) {
  return (
    <Center>
      <Alert action="info" variant={variant} mb={4}>
        <AlertIcon as={Info} mr="$3" />
        <AlertText>
          Unlock the power of knowledge with the following information. Get
        </AlertText>
      </Alert>
      <Alert action="success" variant={variant} mb={4}>
        <AlertIcon as={CheckCircle2Icon} mr="$3" />
        <AlertText>
          Boom! You did it! Please take a moment to pat yourself on the back.
          You've earned it! Boom! You did it! Please take a moment to pat
          yourself on the back. You've earned it!
        </AlertText>
      </Alert>
      <Alert action="error" variant={variant} mb={4}>
        <AlertIcon as={XCircle} mr="$3" />
        <AlertText>
          Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas
          are already on the case. Please hold tight while we fix the issue
        </AlertText>
      </Alert>
      <Alert action="warning" variant={variant} mb={4}>
        <AlertIcon as={AlertCircleIcon} mr="$3" />

        <AlertText>
          Warning: Reading the following content may cause spontaneous outbursts
          of 'aha!' moments
        </AlertText>
      </Alert>
      <Alert action="muted" variant={variant}>
        <AlertIcon as={BellIcon} mr="$3" />
        <AlertText>
          Need a helping hand? Your help alert has just been activated, and
          we're here to lend you our expertise, our experience, and our
          enthusiasm. Let's do this!
        </AlertText>
      </Alert>
    </Center>
  );
}

export default AlertVariants;
export { Alert };
