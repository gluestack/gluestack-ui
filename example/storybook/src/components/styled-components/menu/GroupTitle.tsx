import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    fontSize: '$xs',
    p: '$3',
    color: '$textLight500',
    fontWeight: '$medium',
    _dark: {
      color: '$textDark400',
    },
  },
  {}
);
