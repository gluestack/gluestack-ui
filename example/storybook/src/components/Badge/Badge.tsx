import React from 'react';
import { VStack } from '@gluestack/ui-compiled';
import { Center } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';
import { Root, Text, Icon } from '../styled-components/badge';

// import { createBadge } from '@universa11y/badge';
const BadgeTemp = Root;
//@ts-ignore

BadgeTemp.Text = Text;
//@ts-ignore

BadgeTemp.Icon = Icon;
export const Badge = BadgeTemp;

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
