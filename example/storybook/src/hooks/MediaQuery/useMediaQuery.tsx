import React from 'react';
import { createStyled, useMediaQuery } from '@gluestack-style/react';
import Wrapper from '../../components/Wrapper';
import { View } from 'react-native';

export const styled = createStyled([]) as any;

const StyledBox = styled(View, {
  w: 300,
  h: 300,
  bg: '$green500',
  variants: {
    size: {
      md: {
        bg: '$red500',
      },

      lg: {
        bg: '$blue500',
      },
    },
  },
});

export const MediaQuery = () => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 700,
  });

  return (
    <Wrapper>
      <StyledBox size={isSmallScreen ? '' : 'lg'} />
    </Wrapper>
  );
};

export default MediaQuery;
