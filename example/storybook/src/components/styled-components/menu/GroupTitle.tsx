import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    fontSize: '$xs',
    color: '$textLight500',
    fontWeight: '$medium',
    _dark: {
      color: '$textDark400',
    },
  },
  {}
);
