import React from 'react';
import { Heading } from '@gluestack/design-system';
export const Title = ({ children, ...props }: any) => {
  return (
    <Heading fontSize={36} fontWeight={700} mb={10} {...props} display="flex">
      {children}
    </Heading>
  );
};
