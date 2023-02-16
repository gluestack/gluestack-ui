import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    color: '$text900',
    fontSize: '$md',
    fontWeight: '$normal',
  },
  { ancestorStyle: ['_text'] }
);
