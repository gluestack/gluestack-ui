import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

const Link = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        backgroundColor: '$blue500',
      },
    },
  },
  {}
);

export { Link as Root };
