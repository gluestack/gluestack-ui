import React from 'react';
import { VStack } from '../../ui-components';
import { Center, Badge } from '../../ui-components';
import Wrapper from '../Wrapper';

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
