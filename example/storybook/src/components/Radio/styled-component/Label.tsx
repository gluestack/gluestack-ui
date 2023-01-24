import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    color: '$text900',
    ml: '$2',

    _dark: {
      color: '$text50',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
