import { Text, Box } from '@gluestack-ui/themed';
import React from 'react';

const BoxStory: any = ({
  bg = 'red500',
  w = '100',
  h = '100',
  ...props
}: any) => {
  return (
    <Box
      {...props}
      bg={`$${bg}`}
      h={h}
      w={w}
      justifyContent="center"
      alignItems="center"
    >
      <Text
        color="white"
        fontWeight="$bold"
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        BOX
      </Text>
    </Box>
  );
};

export default BoxStory;

export { Text, Box };
