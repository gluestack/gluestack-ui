import React from 'react';
import { Text, Alert, Box } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      <Alert
        sx={{ style: { flexDirection: 'row', p: 8 } }}
        {...props}
        status="success"
      >
        <Alert.Icon>
          <Box
            sx={{
              style: {
                w: '$4',
                h: '$4',
                bg: '$green800',
                borderRadius: 999,
              },
            }}
          />
        </Alert.Icon>
        <Box>
          <Text>Hello</Text>
        </Box>
      </Alert>
    </Wrapper>
  );
};
