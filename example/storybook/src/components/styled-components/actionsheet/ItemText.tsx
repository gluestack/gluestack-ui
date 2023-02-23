import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    color: '$textLight900',
    fontSize: '$md',
    fontWeight: '$normal',
    _dark: {
      bg: '$textDark50',
    },
  },
  { ancestorStyle: ['_text'] }
);
