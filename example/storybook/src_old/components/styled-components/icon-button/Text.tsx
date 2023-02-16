import { styled } from '@dank-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    color: '$textDark50',
  },
  { ancestorStyle: ['_text'] }
);
