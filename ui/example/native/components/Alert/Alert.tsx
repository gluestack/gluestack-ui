import React from 'react';
import { Alert } from '@gluestack/ui-components';

export const MyAlertExample = () => {
  return (
    <Alert sx={{ style: { flexDirection: 'row', p: 8 } }}>
      <Alert.Icon />
      {/* <Box sx={{ style: { marginLeft: 16 } }}>
        <Text>This is the alert</Text>
      </Box> */}
    </Alert>
  );
};
