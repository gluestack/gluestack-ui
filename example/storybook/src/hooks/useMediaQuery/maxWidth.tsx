import React from 'react';
import { useMediaQuery, styled } from '@gluestack-style/react';
import Wrapper from '../../components/Wrapper';
import { View, Text } from 'react-native';

const StyledBox = styled(View, {
  w: 300,
  h: 300,
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    size: {
      sm: {
        bg: '$green500',
      },
      lg: {
        bg: '$blue500',
      },
    },
  },
}) as any;

const StyledText = styled(Text, {
  color: '$white',
  fontSize: '$xl',
});

export const maxWidth = () => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 700,
  });

  return (
    <Wrapper>
      <StyledBox size={isSmallScreen ? 'sm' : 'lg'}>
        <StyledText>{isSmallScreen ? 'Mobile' : 'Desktop'}</StyledText>
      </StyledBox>
    </Wrapper>
  );
};
export { useMediaQuery };
export default maxWidth;
