import React from 'react';
import { BellIcon, Center } from '../../../ui-components';

import { Alert, AlertIcon, AlertText } from '../../../ui-components';
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
        <AlertIcon
          as={Info}
          mr="$3"
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'Info',
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
          Unlock the power of knowledge with the following information. Get
        </AlertText>
      </Alert>
      <Alert action="success" variant={variant} mb={4}>
        <AlertIcon
          as={CheckCircle2Icon}
          mr="$3"
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
      <Alert action="error" variant={variant} mb={4}>
        <AlertIcon
          as={XCircle}
          mr="$3"
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
      <Alert action="warning" variant={variant} mb={4}>
        <AlertIcon
          as={AlertCircleIcon}
          mr="$3"
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
      <Alert action="muted" variant={variant}>
        <AlertIcon
          as={BellIcon}
          mr="$3"
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
}

export default AlertVariants;
export { Alert };
