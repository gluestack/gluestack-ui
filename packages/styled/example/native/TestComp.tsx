import React from 'react';
import { styled } from 'dank-style';
import { Pressable } from 'react-native';

const ButtonStyled = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$red500',
        w: '$10',
        h: '$10',
      },
    },
  },
  {}
);

const TestComp = () => {
  return <ButtonStyled />;
};

export default TestComp;
