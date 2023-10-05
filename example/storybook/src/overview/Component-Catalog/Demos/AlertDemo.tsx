import React from 'react';
import { Alert, AlertIcon, AlertText, InfoIcon } from '@gluestack-ui/themed';

const AlertDemo = () => {
  return (
    <Alert mx="$2.5" action="info" variant="solid">
      <AlertIcon as={InfoIcon} mr="$3" w={18} h={18} />
      <AlertText>We have updated our terms of service.</AlertText>
    </Alert>
  );
};

export default AlertDemo;
