import React from 'react';
import { styled, useMedia } from '@gluestack-ui/themed';
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

export const MediaHookStory = () => {
  return <BreakPointValue />;
};

const BreakPointValue = () => {
  const media = useMedia();

  return (
    <View
      style={{
        flexDirection: media.lg ? 'row' : 'column',
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
export { useMedia };
export default MediaHookStory;
