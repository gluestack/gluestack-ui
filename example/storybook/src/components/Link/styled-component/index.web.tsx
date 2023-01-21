import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Link = styled(
  View,
  {
    baseStyle: {
      style: {
        backgroundColor: '$secondary500',
      },
    },
  },
  {}
);

export { Link as Root };
