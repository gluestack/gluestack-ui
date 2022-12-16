import React from 'react';
import { Text, Alert, Box } from '@gluestack/ui-components';
import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
