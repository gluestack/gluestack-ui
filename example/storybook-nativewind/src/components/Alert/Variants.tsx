import React from 'react';
import { Center } from '@/components/ui/center';
import { BellIcon, InfoIcon } from '@/components/ui/icon';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  XCircle,
} from 'lucide-react-native';

const AlertVariants = ({ variant }: any) => {
  return (
    <Center className="gap-4">
      <Alert action="info" variant={variant} className="gap-3">
        <AlertIcon as={InfoIcon} />
        <AlertText>
          Unlock the power of knowledge with the following information.
        </AlertText>
      </Alert>
      <Alert action="success" variant={variant} className="gap-3">
        <AlertIcon as={CheckCircle2Icon} />
        <AlertText>
          Boom! You did it! Please take a moment to pat yourself on the back.
          You've earned it! Boom! You did it! Please take a moment to pat
          yourself on the back. You've earned it!
        </AlertText>
      </Alert>
      <Alert action="error" variant={variant} className="gap-3">
        <AlertIcon as={XCircle} />
        <AlertText>
          Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas
          are already on the case. Please hold tight while we fix the issue
        </AlertText>
      </Alert>
      <Alert action="warning" variant={variant} className="gap-3">
        <AlertIcon as={AlertCircleIcon} />

        <AlertText>
          Warning: Reading the following content may cause spontaneous outbursts
          of 'aha!' moments
        </AlertText>
      </Alert>
      <Alert action="muted" variant={variant} className="gap-3">
        <AlertIcon as={BellIcon} />
        <AlertText>
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
