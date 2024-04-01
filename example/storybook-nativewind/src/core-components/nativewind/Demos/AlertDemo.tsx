import React from 'react';
import { Alert, AlertIcon, AlertText } from '..//alert';
import { InfoIcon } from '../';

const AlertDemo = () => {
  return (
    <Alert className="gap-3">
      <AlertIcon as={InfoIcon} />
      <AlertText>Selection successfully moved!</AlertText>
    </Alert>
  );
};

export default AlertDemo;
