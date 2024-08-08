import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
} from '../../../core-components/nativewind';
import { InfoIcon } from '../../../core-components/nativewind';

const AlertDemo = () => {
  return (
    <Alert action="muted">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
};

export default AlertDemo;
