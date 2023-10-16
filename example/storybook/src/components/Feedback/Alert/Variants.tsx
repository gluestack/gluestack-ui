import React from 'react';
import { BellIcon, Center } from '@gluestack-ui/themed';

import { Alert, AlertIcon, AlertText, InfoIcon } from '@gluestack-ui/themed';
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  XCircle,
} from 'lucide-react-native';

const AlertVariants = ({ variant }: any) => {
  return (
    <Center>
      <Alert action="info" variant={variant} mb={4} gap="$3">
        <AlertIcon
          as={InfoIcon}
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
          Unlock the power of knowledge with the following information.
        </AlertText>
      </Alert>
      <Alert action="success" variant={variant} mb={4} gap="$3">
        <AlertIcon
          as={CheckCircle2Icon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'CheckCircle2Icon',
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
          Boom! You did it! Please take a moment to pat yourself on the back.
          You've earned it! Boom! You did it! Please take a moment to pat
          yourself on the back. You've earned it!
        </AlertText>
      </Alert>
      <Alert action="error" variant={variant} mb={4} gap="$3">
        <AlertIcon
          as={XCircle}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'XCircle',
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
          Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas
          are already on the case. Please hold tight while we fix the issue
        </AlertText>
      </Alert>
      <Alert action="warning" variant={variant} mb={4} gap="$3">
        <AlertIcon
          as={AlertCircleIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'AlertCircleIcon',
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
          Warning: Reading the following content may cause spontaneous outbursts
          of 'aha!' moments
        </AlertText>
      </Alert>
      <Alert action="muted" variant={variant} gap="$3">
        <AlertIcon
          as={BellIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'BellIcon',
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
          Need a helping hand? Your help alert has just been activated, and
          we're here to lend you our expertise, our experience, and our
          enthusiasm. Let's do this!
        </AlertText>
      </Alert>
    </Center>
  );
};

export default AlertVariants;
export { Alert };
