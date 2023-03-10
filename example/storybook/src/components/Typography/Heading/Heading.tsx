import React from 'react';
import { Center, Heading } from '../../../ui-components';

import Wrapper from '../../Wrapper';

export const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return (
    <Wrapper>
      <Center>
        <Heading {...props}>{text}</Heading>
      </Center>
    </Wrapper>
  );
};

export { Center, Heading };
