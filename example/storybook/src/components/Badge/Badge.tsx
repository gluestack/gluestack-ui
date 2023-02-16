import React from 'react';
import { Badge, VStack } from '@gluestack/ui-compiled';
import { Center } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const MyBadgeExample = ({
  variant = 'subtle',
  text = 'Badge',
  props,
}: any) => {
  return (
    <Wrapper>
      <Center>
        <Badge variant={variant} {...props}>
          {/* @ts-ignore */}
          <Badge.Text>{text}</Badge.Text>
          {/* @ts-ignore */}
          <Badge.Icon sx={{ pl: 4 }}></Badge.Icon>
        </Badge>
      </Center>
    </Wrapper>
  );
};

export { Badge, Center, VStack };
