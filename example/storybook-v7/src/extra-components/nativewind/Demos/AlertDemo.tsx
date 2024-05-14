import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
} from '../../../core-components/nativewind';
import { InfoIcon } from '../../../core-components/nativewind';

const AlertDemo = () => {
  return (
    <Alert className="gap-1" action="success">
      <AlertIcon as={InfoIcon} />
      <AlertText>Selection successfully moved!</AlertText>
    </Alert>
  );
};

export default AlertDemo;
