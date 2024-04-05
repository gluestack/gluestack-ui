import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
} from '../../../core-components/themed/alert';
import { InfoIcon } from '../../../core-components/themed';

const AlertDemo = () => {
  return (
    <Alert className="gap-3">
      <AlertIcon as={InfoIcon} />
      <AlertText>Selection successfully moved!</AlertText>
    </Alert>
  );
};

export default AlertDemo;
