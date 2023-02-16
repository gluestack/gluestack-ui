import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary600',
    h: '100%',

    _dark: {
      bg: '$primary500',
    },
  },
  {}
);
