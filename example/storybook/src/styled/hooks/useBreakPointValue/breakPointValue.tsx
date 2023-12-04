import React from 'react';
import {
  useMediaQuery,
  styled,
  useBreakpointValue,
} from '@gluestack-style/react';
import Wrapper from '../../components/Wrapper';
import { View, Text } from 'react-native';

const StyledBox = styled(View, {
  w: 100,
  h: 100,
  justifyContent: 'center',
  alignItems: 'center',
  bg: '$cyan500',
  rounded: '$md',
}) as any;

const StyledText = styled(Text, {
  color: '$white',
  fontSize: '$md',
});

export const breakPointValueStory = () => {
  return (
    <Wrapper>
      <BreakPointValue />
    </Wrapper>
  );
};

const BreakPointValue = () => {
  const flexDir = useBreakpointValue({
    base: 'column',
    sm: 'row',
  });

  return (
    <View
      style={{
        flexDirection: flexDir,
        gap: 10,
      }}
    >
      <StyledBox>
        <StyledText>Universal</StyledText>
      </StyledBox>
      <StyledBox>
        <StyledText>Performant</StyledText>
      </StyledBox>
      <StyledBox>
        <StyledText>Accessible</StyledText>
      </StyledBox>
    </View>
  );
};
export { useMediaQuery };
export default breakPointValueStory;
