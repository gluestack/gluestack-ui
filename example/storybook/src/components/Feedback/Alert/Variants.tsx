import React from 'react';
import { NotificationIcon } from '../../../ui-components';
import Wrapper from '../../Wrapper';
import { Alert } from '../../../ui-components';
import { VStack } from '../../../ui-components';
import {
  AlertCircleIcon,
  Info,
  CheckCircle2Icon,
  XCircle,
} from 'lucide-react-native';

export function AlertVariants({ variant }: any) {
  return (
    <Wrapper>
      <VStack
        space="md"
        w="80%"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Alert action="info" variant={variant}>
          <Alert.Icon as={Info} mr="$3" />
          <Alert.Text>
            Unlock the power of knowledge with the following information. Get
            ready to unleash your inner superhero and change the world!
          </Alert.Text>
        </Alert>
        <Alert action="success" variant={variant}>
          <Alert.Icon as={CheckCircle2Icon} mr="$3" />
          <Alert.Text>
            Boom! You did it! Please take a moment to pat yourself on the back.
            You've earned it!
          </Alert.Text>
        </Alert>
        <Alert action="error" variant={variant}>
          <Alert.Icon as={XCircle} mr="$3" />
          <Alert.Text>
            Uh-oh! It looks like the matrix has glitched. Our team of tech
            ninjas are already on the case. Please hold tight while we fix the
            issue
          </Alert.Text>
        </Alert>
        <Alert action="warning" variant={variant}>
          <Alert.Icon as={AlertCircleIcon} mr="$3" />

          <Alert.Text>
            Warning: Reading the following content may cause spontaneous
            outbursts of 'aha!' moments
          </Alert.Text>
        </Alert>
        <Alert action="muted" variant={variant}>
          <Alert.Icon as={NotificationIcon} mr="$3" />
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
