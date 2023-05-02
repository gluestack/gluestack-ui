import React from 'react';
import { Center, Badge, GlobeIcon, Icon } from '../../../ui-components';
import Wrapper from '../../Wrapper';

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
          <Badge.Icon ml={7} as={GlobeIcon} />
        </Badge>
      </Center>
    </Wrapper>
  );
};

export { Center, Badge, GlobeIcon, Icon };
