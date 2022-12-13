import { Center, Text } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      <Text sx={{ style: { fontWeight: 'bold' } }}>Hello World!</Text>
    </Wrapper>
  );
};
