import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    fontSize: '$xs',
    color: '$text500',
    textTransform: 'uppercase',
    _dark: {
      color: '$text400',
    },
  },
  {}
);
