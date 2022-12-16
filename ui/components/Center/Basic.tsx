import { Center, Text } from '@gluestack/ui';
import React from 'react';

export const Example = ({ ...props }) => {
  return (
    <Center sx={{ style: { bg: '$purple500', h: 200, w: 200 } }}>
      <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }} {...props}>
        CENTERED
      </Text>
    </Center>
  );
};
