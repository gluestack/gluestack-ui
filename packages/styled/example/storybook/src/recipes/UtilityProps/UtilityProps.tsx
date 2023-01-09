import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledUtilityProps = styled(
  View,
  {
    baseStyle: {
      style: {
        w: '$40',
        h: '$40',
        bg: '$primary600',
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
  { descendantStyle: ['_text'] }
);

const StyledText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function UtilityProps() {
  return (
    <Wrapper>
      <StyledUtilityProps justifyContent="center" alignItems="center">
        <StyledText>Utility Props Example</StyledText>
      </StyledUtilityProps>
    </Wrapper>
  );
}
