import { createLink } from '@universa11y/link';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Text } from 'react-native';
import { Root } from '../styled-components/link';

export const LinkTemp: any = createLink({
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

export { Text };
