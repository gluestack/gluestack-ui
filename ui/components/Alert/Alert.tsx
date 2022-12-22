import React from 'react';
import { Alert, InfoIcon, Center } from '@gluestack/ui';

export const Example = ({ variant, ...props }) => {
  return (
    <Center>
      <Alert variant={variant} sx={{ bg: '$red400' }}>
        <Alert.Icon>
          <InfoIcon sx={{ style: { width: 18, height: 18 } }} />
        </Alert.Icon>
        <Alert.Text>Selection successfully moved!</Alert.Text>
      </Alert>
    </Center>
  );
};
