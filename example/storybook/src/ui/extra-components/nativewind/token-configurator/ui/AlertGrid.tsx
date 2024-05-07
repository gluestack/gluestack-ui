// components/AlertGrid.js

import React from 'react';
import { Alert, AlertIcon } from '../../../../core-components/nativewind/alert';
import { InfoIcon } from '../../../../core-components/nativewind/icon';
import { Text } from '../../../../core-components/nativewind/text';

const AlertGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Alert className="mx-2.5 mb-2.5 lg:mb-0" action="success" variant="solid">
        <AlertIcon as={InfoIcon} className="mr-3" />
        <Text>12 unread messages. Tap to see.</Text>
      </Alert>

      <Alert className="mx-2.5 mb-2.5 lg:mb-0" action="info" variant="solid">
        <AlertIcon as={InfoIcon} className="mr-3" />
        <Text>New software update available.</Text>
      </Alert>

      <Alert className="mx-2.5 mb-2.5 lg:mb-0" action="warning" variant="solid">
        <AlertIcon as={InfoIcon} className="mr-3" />
        <Text>Warning: Invalid email address!</Text>
      </Alert>

      <Alert className="mx-2.5" action="error" variant="solid">
        <AlertIcon as={InfoIcon} className="mr-3" />
        <Text>Error! Task failed successfully.</Text>
      </Alert>
    </div>
  );
};

export default AlertGrid;
