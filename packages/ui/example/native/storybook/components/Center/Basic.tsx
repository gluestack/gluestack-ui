import { Center, Text } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      <Center sx={{ style: { bg: '$purple.500', h: 200, w: 200 } }}>
        <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }}>
          CENTERED
        </Text>
      </Center>
    </Wrapper>
  );
};
