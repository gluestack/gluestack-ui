import React from 'react';
import { Text } from '@gluestack/design-system';
export const Description = ({ children, ...props }: any) => {
  return (
    <Text
      fontWeight={400}
      fontSize={16}
      color="$trueGray700"
      lineHeight={24}
      mt={10}
      {...props}
    >
      {children}
    </Text>
  );
};
