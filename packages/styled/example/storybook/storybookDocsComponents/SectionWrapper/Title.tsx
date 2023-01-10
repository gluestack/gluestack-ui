import React from 'react';
import { Text } from '@gluestack/design-system';
export const Title = ({ children, ...props }: any) => {
  return (
    <Text
      fontSize={24}
      fontWeight={700}
      color="$trueGray700"
      lineHeight={30}
      display="flex"
      {...props}
    >
      {children}
    </Text>
  );
};
