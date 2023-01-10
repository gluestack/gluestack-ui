import React from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
import { useState } from 'react';
const StyledButtonStateProps = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary600',
        p: '$3',
      },
      descendants: {
        _text: {
          style: {
            color: '$white',
          },
        },
      },
      state: {
        hover: {
          style: {
            bg: '$primary700',
          },
        },
      },
    },
  },
  { descendantStyle: ['_text'] }
);

const StyledButtonText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function ButtonStateProps() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper>
      <StyledButtonStateProps
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        states={{
          hover: isHovered,
        }}
      >
        <StyledButtonText>Md Button</StyledButtonText>
      </StyledButtonStateProps>
    </Wrapper>
  );
}
