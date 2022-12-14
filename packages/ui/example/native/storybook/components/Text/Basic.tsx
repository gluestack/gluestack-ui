import { Center, Text } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ text, ...props }: any) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};
