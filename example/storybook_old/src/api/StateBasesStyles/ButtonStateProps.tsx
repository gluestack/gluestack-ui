import React from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { useState } from 'react';
const StyledButtonStateProps = styled(
  Pressable,
  {
    'bg': '$primary600',
    'p': '$3',

    '_text': {
      color: '$white',
    },

    ':hover': {
      bg: '$primary700',
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

export function ButtonStateProps({ ...args }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper>
      <StyledButtonStateProps
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        states={{
          hover: isHovered,
        }}
        {...args}
      >
        <StyledButtonText>Md Button</StyledButtonText>
      </StyledButtonStateProps>
    </Wrapper>
  );
}

export default ButtonStateProps;
