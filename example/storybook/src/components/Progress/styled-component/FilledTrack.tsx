import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary600',
    borderRadius: 999,
    h: '$2',

    _dark: {
      bg: '$primary400',
    },
  },
  {}
);
