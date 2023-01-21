import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue900', bg: '$amber500', p: 10 } },
  },
  {}
);
