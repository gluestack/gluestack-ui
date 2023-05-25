import React from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  Pressable,
  {
    bg: '$primary600',
    px: '$6',
    py: '$4',

    _text: {
      color: '$white',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

const StyledButtonText = styled(
  Text,
  {
    color: '$red800',
    fontWeight: '700',
  },
  { ancestorStyle: ['_text'] }
);

export function ContextBasedStyles({ ...args }) {
  return (
    <Wrapper>
      <StyledButton {...args}>
        <StyledButtonText>Hello</StyledButtonText>
      </StyledButton>
    </Wrapper>
  );
}

export default ContextBasedStyles;
