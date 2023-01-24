import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    fontSize: '$xs',
    textTransform: 'uppercase',
    color: '$text500',

    _dark: {
      color: '$text400',
    },
  },
  {}
);
