import React from 'react';
import { Text } from '@gluestack/design-system';
export const SectionDescription = ({ children, ...props }: any) => {
  return (
    <Text fontWeight={400} fontSize={16} mt={6} {...props}>
      {children}
    </Text>
  );
};
