import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    p: '$2',
    pb: '$10',
    rounded: '$none',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bg: '$white',
    _web: {
      userSelect: 'none',
    },
  },
  {}
);
