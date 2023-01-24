import React from 'react';
import { Text, Pressable } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { useState } from 'react';

const StyledStateMediaQuery = styled(
  Pressable,
  {
    'bg': '$primary500',
    'p': '$3',

    '_text': {
      color: '$white',
    },

    '@base': {
      'bg': '$red500',
      ':active': {
        bg: '$red700',
      },
    },

    '@sm': {
      'bg': '$blue500',

      ':active': {
        bg: '$blue700',
      },
    },

    '@md': {
      'bg': '$green500',

      ':active': {
        bg: '$green700',
      },
    },

    ':active': {
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

export function StateMediaQuery() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <StyledStateMediaQuery
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        states={{
          active: isActive,
        }}
      >
        <StyledButtonText>Button</StyledButtonText>
      </StyledStateMediaQuery>
    </Wrapper>
  );
}
