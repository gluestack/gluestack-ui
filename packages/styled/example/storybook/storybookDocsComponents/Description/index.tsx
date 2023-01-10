import React from 'react';
import { Text } from '@gluestack/design-system';
export const Description = ({ children, ...props }: any) => {
  return (
    <Text fontSize={16} fontWeight={400} mb={56} {...props}>
      {children}
    </Text>
  );
};
