import React from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary600',
        px: '$6',
        py: '$4',
      },
      descendants: {
        _text: {
          style: {
            color: '$white',
          },
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

const StyledButtonText = styled(
  Text,
  {
    baseStyle: { style: { color: '$red800', fontWeight: '700' } },
  },
  { ancestorStyle: ['_text'] }
);

export function Descendants({ ...args }) {
  return (
    <Wrapper>
      <StyledButton>
        <StyledButtonText>Hello</StyledButtonText>
      </StyledButton>
    </Wrapper>
  );
}
