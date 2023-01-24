import React, { useState } from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledStatePlatform = styled(
  Pressable,
  {
    'bg': '$primary600',
    'p': '$3',

    '_text': {
      color: '$white',
    },

    ':active': {
      bg: '$primary700',
    },

    '_web': {
      'bg': '$red500',

      ':active': {
        bg: '$red700',
      },
    },

    '_android': {
      'bg': '$green500',

      ':active': {
        bg: '$green700',
      },
    },

    '_ios': {
      'bg': '$blue500',

      ':active': {
        bg: '$blue700',
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

export function StatePlatform() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <StyledStatePlatform
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        states={{
          active: isActive,
        }}
      >
        <StyledButtonText>Button</StyledButtonText>
      </StyledStatePlatform>
    </Wrapper>
  );
}
