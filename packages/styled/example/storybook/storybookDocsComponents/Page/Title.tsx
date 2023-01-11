import React from 'react';
import { Text } from '@gluestack/design-system';
export const Title = ({ children, ...props }: any) => {
  return (
    <Text
      fontSize={36}
      fontWeight={700}
      color="$trueGray700"
      lineHeight="43.2px"
      mt={44}
      display="flex"
      {...props}
    >
      {children}
    </Text>
  );
};
