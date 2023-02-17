import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    color: '$black',
  },
  { ancestorStyle: ['_text'] }
);
