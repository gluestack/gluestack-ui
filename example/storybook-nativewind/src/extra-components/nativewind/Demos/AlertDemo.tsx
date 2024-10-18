import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
} from '../../../core-components/nativewind';

const AlertDemo = () => {
  return (
    <Alert>
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
};

export default AlertDemo;
