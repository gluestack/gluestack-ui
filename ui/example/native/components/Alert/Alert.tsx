import React from 'react';
import { Text, Alert, Box } from '@gluestack/ui-components';

export const Example = ({ ...props }) => {
  return (
    <Alert
      sx={{ style: { flexDirection: 'row', p: 8 } }}
      {...props}
      status="pddh"
    >
      <Alert.Icon>hello</Alert.Icon>
      <Box>
        <Text>Hello</Text>
      </Box>
    </Alert>
  );
};
