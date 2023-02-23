import React from 'react';
import { VStack } from '../VStack/VStack';
import { Center } from '../Center/Center';
import Wrapper from '../Wrapper';
import { Root, Text, Icon } from '../styled-components/badge';

const BadgeTemp = Root;
//@ts-ignore

BadgeTemp.Text = Text;
//@ts-ignore

BadgeTemp.Icon = Icon;
export const Badge: any = BadgeTemp;

export const MyBadgeExample = ({
  // variant = 'subtle',
  text = 'Badge',
  ...props
}: any) => {
  return (
    <Wrapper>
      <Center>
        <Badge {...props}>
          <Badge.Text>{text}</Badge.Text>
          {/* <Badge.Icon sx={{ pl: 4 }}></Badge.Icon> */}
        </Badge>
      </Center>
    </Wrapper>
  );
};

export { Center, VStack };
