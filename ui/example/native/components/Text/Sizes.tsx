import React from 'react';
import Wrapper from '../Wrapper';
import { Text } from '@gluestack/ui-components';

export const Example = ({ sizes, ...props }: any) => {
  return (
    <Wrapper>
      {sizes.map((size: any) => (
        <Text sx={{ style: { fontSize: `$${size}` } }}>{size}</Text>
      ))}
    </Wrapper>
  );
};
