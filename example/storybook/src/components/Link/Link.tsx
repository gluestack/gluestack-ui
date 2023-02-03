import { Root } from './styled-component';
import { createLink } from '@universa11y/link';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Text } from 'react-native';

const LinkTemp = createLink({
  Root,
});

export const Link = () => {
  return (
    <Wrapper>
      <LinkTemp href="https://nativebase.io/">
        <Text>NativeBase</Text>
      </LinkTemp>
    </Wrapper>
  );
};

export default Link;
